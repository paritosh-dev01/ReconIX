import { Link, useNavigate } from "react-router-dom";
import "./AssetDetails.css";
import reconixLogo from "../../assets/logo/ReconIXLogo.png";

function AssetDetails() {
  const navigate = useNavigate();

  return (
    <div className="asset-details-page">

      {/* ================= SIDEBAR ================= */}
      <aside className="asset-details-sidebar">

        <div className="asset-details-brand">
          <img src={reconixLogo} alt="ReconIX Logo" />

          <div className="brand-info">
            <h2>
              Recon<span>IX</span>
            </h2>
            <p>Reconnaissance Platform</p>
          </div>
        </div>

        <nav className="asset-details-nav">

          <Link to="/dashboard">
            <span>⌂</span>
            <label>Dashboard</label>
          </Link>

          <Link to="/assets" className="active">
            <span>▣</span>
            <label>Assets</label>
          </Link>

          <Link to="/scans">
            <span>◉</span>
            <label>Scans</label>
          </Link>

          <a href="#">
            <span>◈</span>
            <label>Vulnerabilities</label>
          </a>

          <a href="#">
            <span>◉</span>
            <label>Threat Intelligence</label>
          </a>

          <Link to="/reports">
            <span>▤</span>
            <label>Reports</label>
          </Link>

          <a href="#">
            <span>♙</span>
            <label>Automation</label>
          </a>

          <a href="#">
            <span>✧</span>
            <label>Integrations</label>
          </a>

          <a href="#">
            <span>⚙</span>
            <label>Settings</label>
          </a>

        </nav>

        {/* ENTERPRISE PLAN */}
        <div className="asset-details-plan">
          <div className="plan-icon">♛</div>
          <h3>Enterprise Plan</h3>
          <p>Unlock advanced features and unlimited scans.</p>
          <button>Upgrade Now</button>
        </div>

        {/* SYSTEM STATUS */}
        <div className="asset-details-system">

          <div className="system-heading">
            <span>System Status</span>
            <span>→</span>
          </div>

          <div className="system-secure">
            <span>✓</span>

            <div>
              <strong>All Systems Secure</strong>
              <p>Everything is running smoothly.</p>
            </div>
          </div>

        </div>

        <div className="asset-details-collapse">
          « &nbsp; Collapse
        </div>

      </aside>


      {/* ================= MAIN ================= */}
      <main className="asset-details-main">

        {/* TOP BAR */}
        <header className="asset-details-topbar">

          <div className="topbar-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search assets, scans, vulnerabilities..."
            />
          </div>

          <div className="topbar-user">

            <span className="notification">♧</span>

            <div className="user-avatar">A</div>

            <div className="user-info">
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>

            <span className="user-arrow">⌄</span>

          </div>

        </header>


        {/* CONTENT */}
        <div className="asset-details-content">

          {/* BREADCRUMB */}
          <div className="asset-breadcrumb">
            <Link to="/assets">Assets</Link>
            <span>›</span>
            <strong>Asset Details</strong>
          </div>


          {/* ASSET HEADER */}
          <section className="asset-main-header">

            <div className="asset-title-area">

              <div className="asset-globe">
                ◎
              </div>

              <div>
                <h1>
                  example.com
                  <span className="external-icon">↗</span>
                </h1>

                <p>
                  Domain
                  <span>•</span>
                  https://example.com
                </p>
              </div>

            </div>

            <div className="asset-header-actions">

              <span className="active-badge">
                ● Active
              </span>

              <button
                className="run-scan-btn"
                onClick={() => navigate("/new-scan")}
              >
                ▶ &nbsp; Run New Scan
              </button>

              <button className="actions-btn">
                Actions &nbsp;⌄
              </button>

            </div>

          </section>


          {/* STAT CARDS */}
          <section className="asset-stat-grid">

            <div className="asset-stat-card">
              <div className="stat-icon">◎</div>

              <div className="stat-content">
                <span>IP Address</span>
                <strong>93.184.216.34</strong>
              </div>

              <button>▢</button>
            </div>


            <div className="asset-stat-card">
              <div className="stat-icon risk-icon">♢</div>

              <div className="stat-content">
                <span>Risk Level</span>
                <strong className="medium-text">Medium</strong>
              </div>

              <small>ⓘ</small>
            </div>


            <div className="asset-stat-card">
              <div className="stat-icon">◷</div>

              <div className="stat-content">
                <span>Last Scan</span>
                <strong>2026-05-17 14:32</strong>
                <small>Full Security Scan</small>
              </div>
            </div>


            <div className="asset-stat-card">
              <div className="stat-icon">▧</div>

              <div className="stat-content">
                <span>Open Ports</span>
                <strong>6</strong>
                <small>22, 80, 443, 8080, 3306, 6379</small>
              </div>
            </div>


            <div className="asset-stat-card">
              <div className="stat-icon">⌘</div>

              <div className="stat-content">
                <span>Technologies</span>
                <strong>5 detected</strong>
                <small>Nginx, PHP, MySQL, WordPress...</small>
              </div>
            </div>

          </section>


          {/* TABS */}
          <nav className="asset-tabs">

            <button className="active">
              ⌂ &nbsp; Overview
            </button>

            <button>
              ♧ &nbsp; Subdomains
            </button>

            <button>
              ⚯ &nbsp; Open Ports
            </button>

            <button>
              ▱ &nbsp; Technologies
            </button>

            <button>
              ♢ &nbsp; Vulnerabilities
            </button>

            <button>
              ◷ &nbsp; Scan History
            </button>

          </nav>


          {/* TWO COLUMN AREA */}
          <section className="asset-detail-grid">

            {/* ================= LEFT ================= */}
            <div>

              {/* ASSET OVERVIEW */}
              <div className="detail-panel">

                <div className="panel-title">
                  <span>▤</span>
                  <h2>Asset Overview</h2>
                </div>

                <div className="overview-layout">

                  <div className="overview-info">

                    <div className="info-row">
                      <span>Asset Type</span>
                      <strong>Domain</strong>
                    </div>

                    <div className="info-row">
                      <span>Domain</span>
                      <strong>example.com ↗</strong>
                    </div>

                    <div className="info-row">
                      <span>IP Address</span>
                      <strong>93.184.216.34 ▢</strong>
                    </div>

                    <div className="info-row">
                      <span>Status</span>
                      <strong className="green-value">
                        ● &nbsp; Active
                      </strong>
                    </div>

                    <div className="info-row">
                      <span>Risk Level</span>
                      <strong className="yellow-value">
                        ● &nbsp; Medium
                      </strong>
                    </div>

                    <div className="info-row">
                      <span>Organization</span>
                      <strong>Example Inc.</strong>
                    </div>

                    <div className="info-row">
                      <span>Location</span>
                      <strong>⌖ &nbsp; United States</strong>
                    </div>

                    <div className="info-row">
                      <span>ASN</span>
                      <strong>AS15169 (Google LLC)</strong>
                    </div>

                  </div>


                  <div className="risk-area">

                    <div className="risk-circle">
                      <div>
                        <strong>Medium</strong>
                        <span>Risk Level</span>
                      </div>
                    </div>

                    <div className="risk-message">
                      <span>ⓘ</span>

                      <p>
                        This asset has <strong>3 medium risk</strong> findings
                        and <strong>1 low risk</strong> finding.
                      </p>
                    </div>

                  </div>

                </div>

              </div>


              {/* RECENT SCAN */}
              <div className="detail-panel recent-scan-panel">

                <div className="panel-title">
                  <span>◷</span>
                  <h2>Recent Scan Information</h2>
                </div>

                <div className="recent-scan-layout">

                  <div className="scan-info">

                    <div className="info-row">
                      <span>Scan ID</span>
                      <strong>SCAN-2026-05-17-0012 ▢</strong>
                    </div>

                    <div className="info-row">
                      <span>Scan Type</span>
                      <strong>Full Security Scan</strong>
                    </div>

                    <div className="info-row">
                      <span>Scan Engine</span>
                      <strong>Recon Engine v2.4.1</strong>
                    </div>

                    <div className="info-row">
                      <span>Started At</span>
                      <strong>2026-05-17 14:32:10</strong>
                    </div>

                    <div className="info-row">
                      <span>Completed At</span>
                      <strong>2026-05-17 15:05:42</strong>
                    </div>

                    <div className="info-row">
                      <span>Duration</span>
                      <strong>00:33:32</strong>
                    </div>

                  </div>


                  <div className="scan-result-box">

                    <div className="scan-complete">

                      <div className="complete-icon">
                        ✓
                      </div>

                      <strong>Scan Completed</strong>

                      <span>100%</span>

                    </div>

                    <div className="finding-total">
                      <span>Total Findings</span>
                      <strong>28</strong>
                    </div>

                    <div className="finding-item">
                      <span className="finding-dot high"></span>
                      High
                      <strong>6</strong>
                    </div>

                    <div className="finding-item">
                      <span className="finding-dot medium"></span>
                      Medium
                      <strong>15</strong>
                    </div>

                    <div className="finding-item">
                      <span className="finding-dot low"></span>
                      Low
                      <strong>7</strong>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* ================= RIGHT ================= */}
            <div>

              {/* QUICK ACTIONS */}
              <div className="detail-panel quick-actions">

                <div className="panel-title">
                  <span>ϟ</span>
                  <h2>Quick Actions</h2>
                </div>

                <button>
                  <span>♧</span>
                  View Subdomains
                  <b>›</b>
                </button>

                <button>
                  <span>◷</span>
                  View Open Ports
                  <b>›</b>
                </button>

                <button>
                  <span>▱</span>
                  View Technologies
                  <b>›</b>
                </button>

                <button>
                  <span>♢</span>
                  View Vulnerabilities
                  <b>›</b>
                </button>

                <button onClick={() => navigate("/new-scan")}>
                  <span>▶</span>
                  Run New Scan
                  <b>›</b>
                </button>

              </div>


              {/* RELATED INFORMATION */}
              <div className="detail-panel related-info">

                <div className="panel-title">
                  <span>↗</span>
                  <h2>Related Information</h2>
                </div>

                <button>
                  <span>Subdomains</span>
                  <strong>12 found</strong>
                  <b>›</b>
                </button>

                <button>
                  <span>Open Ports</span>
                  <strong>6 found</strong>
                  <b>›</b>
                </button>

                <button>
                  <span>Technologies</span>
                  <strong>5 detected</strong>
                  <b>›</b>
                </button>

                <button>
                  <span>Vulnerabilities</span>
                  <strong>28 found</strong>
                  <b>›</b>
                </button>

                <button>
                  <span>Last Scan</span>
                  <strong>2026-05-17 14:32</strong>
                </button>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default AssetDetails;