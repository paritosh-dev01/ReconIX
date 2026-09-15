import { useState } from "react";
import "./Vulnerabilities.css";

function Vulnerabilities() {
  const [filter, setFilter] = useState("All");

  const vulnerabilities = [
    {
      id: "VUL-001",
      title: "Cross-Site Scripting (XSS)",
      asset: "example.com",
      severity: "Critical",
      status: "Open",
      discovered: "Today",
      category: "Web",
    },
    {
      id: "VUL-002",
      title: "Missing Security Headers",
      asset: "api.example.com",
      severity: "High",
      status: "Open",
      discovered: "Today",
      category: "Configuration",
    },
    {
      id: "VUL-003",
      title: "Exposed Service",
      asset: "192.168.1.20",
      severity: "High",
      status: "Open",
      discovered: "Yesterday",
      category: "Network",
    },
    {
      id: "VUL-004",
      title: "Outdated TLS Configuration",
      asset: "portal.example.com",
      severity: "Medium",
      status: "Open",
      discovered: "2 days ago",
      category: "SSL/TLS",
    },
    {
      id: "VUL-005",
      title: "Information Disclosure",
      asset: "dev.example.com",
      severity: "Low",
      status: "Resolved",
      discovered: "3 days ago",
      category: "Web",
    },
  ];

  const filteredVulnerabilities =
    filter === "All"
      ? vulnerabilities
      : vulnerabilities.filter(
          (item) => item.severity === filter
        );

  return (
    <div className="vulnerabilities-page">

      {/* PAGE HEADER */}
      <div className="vulnerabilities-header">
        <div>
          <div className="vulnerabilities-title-row">
            <div className="vulnerabilities-title-icon">
              ⚠
            </div>

            <div>
              <h1>Vulnerabilities</h1>
              <p>
                Discover, analyze and manage security vulnerabilities
              </p>
            </div>
          </div>
        </div>

        <button className="vulnerabilities-scan-btn">
          + New Scan
        </button>
      </div>


      {/* STAT CARDS */}
      <div className="vulnerabilities-stats">

        <div className="vulnerability-stat-card">
          <div className="vulnerability-stat-icon purple">
            ◉
          </div>

          <div>
            <span>Total Vulnerabilities</span>
            <strong>24</strong>
          </div>
        </div>


        <div className="vulnerability-stat-card">
          <div className="vulnerability-stat-icon red">
            !
          </div>

          <div>
            <span>Critical</span>
            <strong>03</strong>
          </div>
        </div>


        <div className="vulnerability-stat-card">
          <div className="vulnerability-stat-icon orange">
            ▲
          </div>

          <div>
            <span>High Severity</span>
            <strong>07</strong>
          </div>
        </div>


        <div className="vulnerability-stat-card">
          <div className="vulnerability-stat-icon cyan">
            ✓
          </div>

          <div>
            <span>Resolved</span>
            <strong>14</strong>
          </div>
        </div>

      </div>


      {/* MAIN CONTENT */}
      <div className="vulnerabilities-workspace">

        <section className="vulnerabilities-panel">

          {/* PANEL HEADER */}
          <div className="vulnerabilities-panel-header">

            <div>
              <h2>Security Findings</h2>
              <p>
                Detected vulnerabilities across monitored assets
              </p>
            </div>

            <div className="vulnerability-filters">

              {["All", "Critical", "High", "Medium", "Low"].map(
                (item) => (
                  <button
                    key={item}
                    className={
                      filter === item
                        ? "active"
                        : ""
                    }
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                )
              )}

            </div>

          </div>


          {/* TABLE */}
          <div className="vulnerabilities-table">

            <div className="vulnerability-table-head">
              <span>VULNERABILITY</span>
              <span>ASSET</span>
              <span>SEVERITY</span>
              <span>STATUS</span>
              <span>DISCOVERED</span>
            </div>


            {filteredVulnerabilities.map((item) => (

              <div
                className="vulnerability-table-row"
                key={item.id}
              >

                {/* VULNERABILITY */}
                <div className="vulnerability-main">

                  <div className="vulnerability-row-icon">
                    ⚠
                  </div>

                  <div>
                    <strong>{item.title}</strong>
                    <span>
                      {item.id} · {item.category}
                    </span>
                  </div>

                </div>


                {/* ASSET */}
                <div className="vulnerability-asset">
                  <span className="asset-dot"></span>
                  {item.asset}
                </div>


                {/* SEVERITY */}
                <div>
                  <span
                    className={`severity-badge ${item.severity.toLowerCase()}`}
                  >
                    {item.severity}
                  </span>
                </div>


                {/* STATUS */}
                <div>
                  <span
                    className={`vulnerability-status ${item.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item.status}
                  </span>
                </div>


                {/* DISCOVERED */}
                <div className="vulnerability-time">
                  {item.discovered}
                </div>

              </div>

            ))}

          </div>

        </section>


        {/* RIGHT SIDE SUMMARY */}
        <aside className="vulnerability-summary-panel">

          <div className="summary-header">
            <div className="summary-icon">
              ◈
            </div>

            <div>
              <h2>Risk Overview</h2>
              <p>Current security posture</p>
            </div>
          </div>


          <div className="risk-score">

            <div className="risk-score-circle">
              <strong>72</strong>
              <span>/100</span>
            </div>

            <div>
              <strong>Security Risk</strong>
              <span>Moderate exposure detected</span>
            </div>

          </div>


          <div className="risk-breakdown">

            <div className="risk-item">
              <div>
                <span className="risk-label critical">
                  Critical
                </span>
                <strong>03</strong>
              </div>

              <div className="risk-bar">
                <span
                  className="risk-fill critical-fill"
                  style={{ width: "30%" }}
                ></span>
              </div>
            </div>


            <div className="risk-item">
              <div>
                <span className="risk-label high">
                  High
                </span>
                <strong>07</strong>
              </div>

              <div className="risk-bar">
                <span
                  className="risk-fill high-fill"
                  style={{ width: "55%" }}
                ></span>
              </div>
            </div>


            <div className="risk-item">
              <div>
                <span className="risk-label medium">
                  Medium
                </span>
                <strong>09</strong>
              </div>

              <div className="risk-bar">
                <span
                  className="risk-fill medium-fill"
                  style={{ width: "70%" }}
                ></span>
              </div>
            </div>


            <div className="risk-item">
              <div>
                <span className="risk-label low">
                  Low
                </span>
                <strong>05</strong>
              </div>

              <div className="risk-bar">
                <span
                  className="risk-fill low-fill"
                  style={{ width: "40%" }}
                ></span>
              </div>
            </div>

          </div>


          <div className="summary-divider"></div>


          <div className="summary-footer">

            <span>Last scan</span>
            <strong>Today · 18:42</strong>

          </div>

          <div className="summary-footer">

            <span>Assets monitored</span>
            <strong>128</strong>

          </div>

        </aside>

      </div>

    </div>
  );
}

export default Vulnerabilities;