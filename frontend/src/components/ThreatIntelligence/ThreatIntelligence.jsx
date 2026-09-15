import { useState } from "react";
import "./ThreatIntelligence.css";

function ThreatIntelligence() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");

  const threatStats = [
    {
      label: "Active Threats",
      value: "24",
      change: "+6.2%",
      type: "danger",
      icon: "⚠",
    },
    {
      label: "Critical IOCs",
      value: "08",
      change: "+2",
      type: "critical",
      icon: "◈",
    },
    {
      label: "Threat Actors",
      value: "17",
      change: "+3",
      type: "purple",
      icon: "♟",
    },
    {
      label: "Indicators Tracked",
      value: "1,284",
      change: "+12.8%",
      type: "cyan",
      icon: "◎",
    },
  ];

  const threats = [
    {
      name: "APT-29",
      description: "Advanced persistent threat activity",
      category: "Threat Actor",
      severity: "Critical",
      confidence: "98%",
      updated: "12 min ago",
      color: "critical",
    },
    {
      name: "Cobalt Strike",
      description: "Command and control framework",
      category: "Malware",
      severity: "High",
      confidence: "94%",
      updated: "28 min ago",
      color: "high",
    },
    {
      name: "Phishing Infrastructure",
      description: "Suspicious credential harvesting campaign",
      category: "Campaign",
      severity: "High",
      confidence: "91%",
      updated: "1 hour ago",
      color: "high",
    },
    {
      name: "Ransomware Activity",
      description: "Potential ransomware infrastructure detected",
      category: "Malware",
      severity: "Medium",
      confidence: "86%",
      updated: "3 hours ago",
      color: "medium",
    },
  ];

  const indicators = [
    {
      indicator: "185.73.44.21",
      type: "IP Address",
      threat: "C2 Server",
      severity: "Critical",
      confidence: "97%",
      color: "critical",
    },
    {
      indicator: "secure-update[.]net",
      type: "Domain",
      threat: "Phishing",
      severity: "High",
      confidence: "93%",
      color: "high",
    },
    {
      indicator: "8f4c9d2a7e...b31f",
      type: "File Hash",
      threat: "Malware",
      severity: "High",
      confidence: "95%",
      color: "high",
    },
    {
      indicator: "cdn-login[.]com/auth",
      type: "URL",
      threat: "Credential Theft",
      severity: "Medium",
      confidence: "88%",
      color: "medium",
    },
    {
      indicator: "103.214.167.82",
      type: "IP Address",
      threat: "Botnet",
      severity: "Medium",
      confidence: "84%",
      color: "medium",
    },
  ];

  const filteredIndicators =
    activeType === "All"
      ? indicators
      : indicators.filter((item) => item.type === activeType);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const visibleIndicators = filteredIndicators.filter((item) =>
    `${item.indicator} ${item.type} ${item.threat}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="threat-intelligence-page">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="threat-page-header">

        <div className="threat-title-wrap">

          <div className="threat-title-icon">
            ◈
          </div>

          <div>
            <h1>Threat Intelligence</h1>
            <p>
              Monitor threats, indicators and intelligence across your security environment
            </p>
          </div>

        </div>

        <div className="threat-live-status">
          <span></span>
          Intelligence Feed Live
        </div>

      </div>


      {/* =====================================================
          SEARCH
      ===================================================== */}

      <section className="threat-search-card">

        <div className="threat-search-heading">
          <div className="threat-search-icon">
            ⌕
          </div>

          <div>
            <h2>Threat Search</h2>
            <p>
              Search IP addresses, domains, hashes, URLs and threat actors
            </p>
          </div>
        </div>

        <div className="threat-search-box">

          <span className="threat-search-symbol">
            ⌕
          </span>

          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search indicator, domain, IP, hash or threat actor..."
          />

          {search && (
            <button
              className="threat-clear-btn"
              onClick={() => setSearch("")}
              type="button"
            >
              ×
            </button>
          )}

          <button
            className="threat-search-btn"
            type="button"
          >
            Search
          </button>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <div className="threat-stats">

        {threatStats.map((stat) => (
          <div
            className={`threat-stat-card ${stat.type}`}
            key={stat.label}
          >

            <div className="threat-stat-top">

              <div className="threat-stat-icon">
                {stat.icon}
              </div>

              <span className="threat-stat-change">
                {stat.change}
              </span>

            </div>

            <div className="threat-stat-value">
              {stat.value}
            </div>

            <div className="threat-stat-label">
              {stat.label}
            </div>

          </div>
        ))}

      </div>


      {/* =====================================================
          MAIN WORKSPACE
      ===================================================== */}

      <div className="threat-workspace">


        {/* ===================================================
            RECENT THREATS
        =================================================== */}

        <section className="threat-card recent-threats-card">

          <div className="threat-card-header">

            <div className="threat-card-title">

              <div className="threat-section-icon purple">
                ⚠
              </div>

              <div>
                <h2>Recent Threat Intelligence</h2>
                <p>
                  Latest threats identified by intelligence feeds
                </p>
              </div>

            </div>

            <button className="threat-view-btn">
              View All →
            </button>

          </div>


          <div className="threat-list">

            {threats.map((threat) => (
              <div
                className="threat-list-row"
                key={threat.name}
              >

                <div className={`threat-indicator-icon ${threat.color}`}>
                  ◈
                </div>

                <div className="threat-list-info">

                  <div className="threat-list-name">
                    {threat.name}

                    <span className={`threat-severity ${threat.color}`}>
                      {threat.severity}
                    </span>
                  </div>

                  <p>{threat.description}</p>

                  <span className="threat-category">
                    {threat.category}
                  </span>

                </div>

                <div className="threat-confidence">

                  <span>Confidence</span>

                  <strong>
                    {threat.confidence}
                  </strong>

                </div>

                <div className="threat-updated">
                  {threat.updated}
                </div>

              </div>
            ))}

          </div>

        </section>


        {/* ===================================================
            THREAT OVERVIEW
        =================================================== */}

        <section className="threat-card overview-card">

          <div className="threat-card-header">

            <div className="threat-card-title">

              <div className="threat-section-icon cyan">
                ◉
              </div>

              <div>
                <h2>Threat Overview</h2>
                <p>Current intelligence distribution</p>
              </div>

            </div>

          </div>


          <div className="threat-overview-content">

            <div className="threat-overview-circle">

              <div>
                <strong>24</strong>
                <span>Active</span>
              </div>

            </div>


            <div className="threat-overview-legend">

              <div className="threat-legend-row">
                <span className="legend-dot critical"></span>
                <span>Critical</span>
                <strong>08</strong>
              </div>

              <div className="threat-legend-row">
                <span className="legend-dot high"></span>
                <span>High</span>
                <strong>09</strong>
              </div>

              <div className="threat-legend-row">
                <span className="legend-dot medium"></span>
                <span>Medium</span>
                <strong>07</strong>
              </div>

            </div>

          </div>


          <div className="threat-feed-status">

            <span className="feed-dot"></span>

            <div>
              <strong>Global feeds synchronized</strong>
              <p>Last update 2 minutes ago</p>
            </div>

          </div>

        </section>

      </div>


      {/* =====================================================
          INDICATORS
      ===================================================== */}

      <section className="threat-card indicators-card">

        <div className="threat-card-header">

          <div className="threat-card-title">

            <div className="threat-section-icon blue">
              ◎
            </div>

            <div>
              <h2>Indicators of Compromise</h2>
              <p>
                Recently observed malicious indicators
              </p>
            </div>

          </div>

          <button className="threat-export-btn">
            Export
          </button>

        </div>


        {/* ===================================================
            FILTERS
        =================================================== */}

        <div className="indicator-filters">

          {["All", "IP Address", "Domain", "File Hash", "URL"].map(
            (type) => (
              <button
                key={type}
                type="button"
                className={
                  activeType === type
                    ? "indicator-filter active"
                    : "indicator-filter"
                }
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            )
          )}

        </div>


        {/* ===================================================
            TABLE
        =================================================== */}

        <div className="indicator-table">

          <div className="indicator-table-head">

            <span>INDICATOR</span>
            <span>TYPE</span>
            <span>THREAT</span>
            <span>SEVERITY</span>
            <span>CONFIDENCE</span>

          </div>


          {visibleIndicators.length > 0 ? (
            visibleIndicators.map((item) => (
              <div
                className="indicator-table-row"
                key={item.indicator}
              >

                <div className="indicator-value">
                  <span className="indicator-copy">
                    {item.indicator}
                  </span>
                  <button type="button">
                    Copy
                  </button>
                </div>

                <span className="indicator-type">
                  {item.type}
                </span>

                <span className="indicator-threat">
                  {item.threat}
                </span>

                <span className={`indicator-severity ${item.color}`}>
                  {item.severity}
                </span>

                <div className="indicator-confidence">

                  <div className="confidence-bar">
                    <span
                      style={{
                        width: item.confidence,
                      }}
                    ></span>
                  </div>

                  <strong>
                    {item.confidence}
                  </strong>

                </div>

              </div>
            ))
          ) : (
            <div className="indicator-empty">
              No indicators found
            </div>
          )}

        </div>

      </section>


      {/* =====================================================
          BOTTOM INFORMATION
      ===================================================== */}

      <div className="threat-bottom-grid">

        <div className="threat-info-card">

          <div className="threat-info-icon purple">
            ◈
          </div>

          <div>
            <strong>Intelligence Sources</strong>
            <p>
              12 active intelligence sources are currently connected.
            </p>
          </div>

          <span className="threat-info-value">
            12
          </span>

        </div>


        <div className="threat-info-card">

          <div className="threat-info-icon cyan">
            ◉
          </div>

          <div>
            <strong>Last Intelligence Update</strong>
            <p>
              Threat feeds were synchronized successfully.
            </p>
          </div>

          <span className="threat-info-value">
            2m
          </span>

        </div>

      </div>

    </div>
  );
}

export default ThreatIntelligence;