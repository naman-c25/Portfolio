import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillStar } from "react-icons/ai";
import { BsFolder2Open, BsPeople } from "react-icons/bs";

const USERNAME = "naman-c25";
const CACHE_KEY = "gh-stats-v1";
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

function GithubStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { time, data } = JSON.parse(cached);
        if (Date.now() - time < CACHE_TTL) {
          setStats(data);
          return;
        }
      } catch (e) {
        /* fall through to refetch */
      }
    }

    Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`).then((r) => {
        if (!r.ok) throw new Error("user fetch failed");
        return r.json();
      }),
      fetch(
        `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`
      ).then((r) => {
        if (!r.ok) throw new Error("repos fetch failed");
        return r.json();
      }),
    ])
      .then(([user, repos]) => {
        const stars = repos.reduce(
          (sum, repo) => sum + (repo.stargazers_count || 0),
          0
        );
        const langCounts = {};
        repos.forEach((repo) => {
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        });
        const topLangs = Object.entries(langCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang]) => lang);

        const data = {
          repos: user.public_repos,
          followers: user.followers,
          stars,
          topLangs,
        };
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ time: Date.now(), data })
        );
        if (!cancelled) setStats(data);
      })
      .catch(() => {
        /* API unreachable or rate-limited — render nothing */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!stats) return null;

  const tiles = [
    { icon: <BsFolder2Open />, label: "Public Repos", value: stats.repos },
    { icon: <AiFillStar />, label: "Stars Earned", value: stats.stars },
    { icon: <BsPeople />, label: "Followers", value: stats.followers },
  ];

  return (
    <div className="gh-stats">
      <p className="gh-stats-caption">
        <AiFillGithub style={{ marginBottom: "3px" }} /> Live from my GitHub
      </p>
      <Row style={{ justifyContent: "center" }}>
        {tiles.map((tile) => (
          <Col xs={6} md={3} key={tile.label} className="gh-stat-tile">
            <div className="gh-stat-icon">{tile.icon}</div>
            <div className="gh-stat-value">{tile.value}</div>
            <div className="gh-stat-label">{tile.label}</div>
          </Col>
        ))}
      </Row>
      {stats.topLangs.length > 0 && (
        <p className="gh-stats-langs">
          Most used:{" "}
          {stats.topLangs.map((lang) => (
            <span key={lang} className="gh-lang-chip">
              {lang}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

export default GithubStats;
