import { useState } from "react";
import "./Integrations.css";

function Integrations() {
  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: "GitHub",
      description: "Connect repositories and monitor security activity.",
      category: "Development",
      icon: "◈",
      color: "purple",
      connected: true,
      account: "Connected",
    },
    {
      id: 2,
      name: "Slack",
      description: "Receive real-time security alerts and scan notifications.",
      category: "Communication",
      icon: "✣",
      color: "cyan",
      connected: true,
      account: "Security Workspace",
    },
    {
      id: 3,
      name: "Jira",
      description: "Create and manage security issues from scan findings.",
      category: "Project Management",
      icon: "◆",
      color: "blue",
      connected: false,
      account: "",
    },
    {
      id: 4,
      name: "Discord",
      description: "Send ReconIX security notifications to your server.",
      category: "Communication",
      icon: "◉",
      color: "purple",
      connected: false,
      account: "",
    },
    {
      id: 5,
      name: "Webhook",
      description: "Send security events to any external application.",
      category: "Automation",
      icon: "↗",
      color: "cyan",
      connected: false,
      account: "",
    },
    {
      id: 6,
      name: "Microsoft Teams",
      description: "Deliver scan results and security alerts to Teams.",
      category: "Communication",
      icon: "▦",
      color: "blue",
      connected: false,
      account: "",
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const toggleConnection = (id) => {
    setIntegrations((current) =>
      current.map((integration) =>
        integration.id === id
          ? {
              ...integration,
              connected: !integration.connected,
              account: !integration.connected
                ? "Connected"
                : "",
            }
          : integration
      )
    );
  };

  const filters = [
    "All",
    "Connected",
    "Development",
    "Communication",
    "Automation",
  ];

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(search.toLowerCase()) ||
      integration.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Connected" && integration.connected) ||
      integration.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const connectedCount = integrations.filter(
    (integration) => integration.connected
  ).length;

  return (
    <div className="integrations-page">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="integrations-page-header">

        <div className="integrations-title-wrap">

          <div className="integrations-title-icon">
            ✣
          </div>

          <div>
            <h1>Integrations</h1>
            <p>
              Connect ReconIX with your development and security workflow
            </p>
          </div>

        </div>

        <div className="integrations-header-status">
          <span className="status-dot"></span>
          {connectedCount} Connected
        </div>

      </div>


      {/* =====================================================
          OVERVIEW CARDS
      ===================================================== */}

      <div className="integrations-stats">

        <div className="integration-stat-card">

          <div className="integration-stat-icon purple">
            ✣
          </div>

          <div>
            <strong>{integrations.length}</strong>
            <span>Available Integrations</span>
          </div>

        </div>


        <div className="integration-stat-card">

          <div className="integration-stat-icon cyan">
            ✓
          </div>

          <div>
            <strong>{connectedCount}</strong>
            <span>Connected</span>
          </div>

        </div>


        <div className="integration-stat-card">

          <div className="integration-stat-icon blue">
            ⚡
          </div>

          <div>
            <strong>24/7</strong>
            <span>Event Monitoring</span>
          </div>

        </div>


        <div className="integration-stat-card">

          <div className="integration-stat-icon green">
            ●
          </div>

          <div>
            <strong>Active</strong>
            <span>Integration Status</span>
          </div>

        </div>

      </div>


      {/* =====================================================
          SEARCH + FILTER
      ===================================================== */}

      <section className="integrations-toolbar">

        <div className="integrations-search">

          <span className="integrations-search-icon">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search integrations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="integrations-clear"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}

        </div>


        <div className="integrations-filters">

          {filters.map((filter) => (
            <button
              key={filter}
              className={`integration-filter ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}

        </div>

      </section>


      {/* =====================================================
          INTEGRATIONS GRID
      ===================================================== */}

      <section className="integrations-section">

        <div className="integrations-section-header">

          <div>
            <h2>Available Integrations</h2>
            <p>
              Extend ReconIX with tools already used by your security team
            </p>
          </div>

          <span className="integration-result-count">
            {filteredIntegrations.length} integrations
          </span>

        </div>


        <div className="integrations-grid">

          {filteredIntegrations.map((integration) => (

            <article
              className={`integration-card ${
                integration.connected ? "is-connected" : ""
              }`}
              key={integration.id}
            >

              {/* CARD TOP */}

              <div className="integration-card-top">

                <div
                  className={`integration-app-icon ${integration.color}`}
                >
                  {integration.icon}
                </div>

                <div className="integration-card-heading">

                  <div className="integration-name-row">

                    <h3>{integration.name}</h3>

                    {integration.connected && (
                      <span className="integration-connected-badge">
                        Connected
                      </span>
                    )}

                  </div>

                  <span className="integration-category">
                    {integration.category}
                  </span>

                </div>

              </div>


              {/* DESCRIPTION */}

              <p className="integration-description">
                {integration.description}
              </p>


              {/* ACCOUNT */}

              <div className="integration-account">

                <span className="account-label">
                  {integration.connected ? "ACCOUNT" : "STATUS"}
                </span>

                <span className="account-value">
                  {integration.connected
                    ? integration.account
                    : "Not connected"}
                </span>

              </div>


              {/* ACTION */}

              <div className="integration-card-footer">

                <button
                  className={
                    integration.connected
                      ? "integration-configure-btn"
                      : "integration-connect-btn"
                  }
                  onClick={() => toggleConnection(integration.id)}
                >
                  {integration.connected
                    ? "Configure"
                    : "Connect"}
                </button>

                <button className="integration-more-btn">
                  ⋮
                </button>

              </div>

            </article>

          ))}

        </div>


        {/* EMPTY STATE */}

        {filteredIntegrations.length === 0 && (

          <div className="integrations-empty">

            <div className="integrations-empty-icon">
              ⌕
            </div>

            <h3>No integrations found</h3>

            <p>
              Try changing your search or selected filter.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>


      {/* =====================================================
          CUSTOM WEBHOOK / API SECTION
      ===================================================== */}

      <section className="integration-custom-card">

        <div className="custom-integration-icon">
          ↗
        </div>

        <div className="custom-integration-content">

          <h2>Custom Integration</h2>

          <p>
            Connect ReconIX to your own application using webhooks and
            security events.
          </p>

        </div>

        <button className="custom-integration-btn">
          Create Webhook
        </button>

      </section>


      {/* =====================================================
          SECURITY NOTE
      ===================================================== */}

      <div className="integrations-security-note">

        <div className="security-note-icon">
          🛡
        </div>

        <div>

          <strong>Integration Security</strong>

          <p>
            ReconIX integrations use secure connections and only request
            the permissions required for their configured functionality.
          </p>

        </div>

        <span className="security-note-status">
          Protected
        </span>

      </div>

    </div>
  );
}

export default Integrations;