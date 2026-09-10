import "./RunningScan.css";
import reconixLogo from "../../assets/logo/ReconIXLogo.png";

function RunningScan() {
  return (
    <div className="running-scan-page">

      {/* ================= SIDEBAR ================= */}
      <aside className="running-sidebar">

        <div className="running-brand">
          <img src={reconixLogo} alt="ReconIX" />

          <span className="running-brand-text">
            Recon<span>IX</span>
          </span>
        </div>

        <nav className="running-sidebar-nav">

          <a href="#" className="running-nav-item">
            <span className="running-nav-icon">⌂</span>
            <span>Dashboard</span>
          </a>

          <a href="#" className="running-nav-item">
            <span className="running-nav-icon">▣</span>
            <span>Assets</span>
          </a>

          <a href="#" className="running-nav-item active">
            <span className="running-nav-icon">◉</span>
            <span>Scans</span>
          </a>

          <a href="#" className="running-nav-item">
            <span className="running-nav-icon">♢</span>
            <span>Vulnerabilities</span>
          </a>

          <a href="#" className="running-nav-item">
            <span className="running-nav-icon">◉</span>
            <span>Threat Intelligence</span>
          </a>

          <a href="#" className="running-nav-item">
            <span className="running-nav-icon">▤</span>
            <span>Reports</span>
          </a>

          <a href="#" className="running-nav-item">
            <span className="running-nav-icon">♙</span>
            <span>Automation</span>
          </a>

          <a href="#" className="running-nav-item">
            <span className="running-nav-icon">✧</span>
            <span>Integrations</span>
          </a>

          <a href="#" className="running-nav-item">
            <span className="running-nav-icon">⚙</span>
            <span>Settings</span>
          </a>

        </nav>

        <div className="running-enterprise-card">
          <div className="enterprise-icon">♛</div>

          <h3>Enterprise Plan</h3>

          <p>
            Unlock advanced features
            and unlimited scans.
          </p>

          <button>Upgrade Now</button>
        </div>

        <div className="running-system-card">

          <div className="system-card-header">
            <span>System Status</span>
            <span className="system-arrow">→</span>
          </div>

          <div className="system-status">

            <span className="system-status-icon">✓</span>

            <div>
              <strong>All Systems Secure</strong>
              <p>Everything is running smoothly.</p>
            </div>

          </div>

        </div>

        <div className="running-collapse">
          <span>«</span>
          <span>Collapse</span>
        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}
      <main className="running-main">

        {/* TOP HEADER */}
        <header className="running-topbar">

          <div className="running-breadcrumb">

            <span>Dashboard</span>

            <b>›</b>

            <span>Scans</span>

            <b>›</b>

            <strong>Running Scan</strong>

          </div>


          <div className="running-topbar-right">

            <div className="running-search">
              <span className="search-icon">⌕</span>

              <span>
                Search assets, scans, vulnerabilities...
              </span>

              <kbd>⌘ K</kbd>
            </div>

            <button className="top-icon-button">
              ♧
              <span className="notification-badge">8</span>
            </button>

            <button className="top-icon-button">
              ?
            </button>

            <button className="top-icon-button">
              ☾
            </button>

            <div className="admin-profile">

              <div className="admin-avatar">
                A
              </div>

              <div>
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>

              <span className="admin-arrow">⌄</span>

            </div>

          </div>

        </header>


        {/* PAGE HEADER */}
        <section className="running-page-header">

          <div className="running-title-area">

            <div className="running-title-icon">
              ◉
            </div>

            <div>
              <h1>Running Scan</h1>

              <p>
                Real-time progress and live scan activity
              </p>
            </div>

          </div>


          <div className="running-actions">

            <button className="scan-action pause">
              <span>Ⅱ</span>
              Pause Scan
            </button>

            <button className="scan-action stop">
              <span>■</span>
              Stop Scan
            </button>

            <button className="scan-action details">
              <span>◉</span>
              View Details
            </button>

            <button
              className="scan-action results"
              onClick={() => window.location.href = "/scan-results"}
            >
              <span>→</span>
              Open Results
            </button>

          </div>

        </section>


        {/* PROGRESS CARD */}
        <section className="scan-progress-card">

          <div className="progress-circle-area">

            <div className="progress-ring">

              <div className="progress-ring-inner">
                <strong>68%</strong>

                <span>Elapsed Time</span>

                <b>00:12:45</b>
              </div>

            </div>

          </div>


          <div className="scan-information">

            <div className="scan-info-heading">

              <h2>Website Security Scan – Prod</h2>

              <span>Full Security Scan</span>

            </div>


            <div className="scan-target">

              <small>Target</small>

              <div>
                <span>◎</span>
                <strong>https://example.com</strong>
                <span>↗</span>
              </div>

            </div>


            <div className="scan-id">

              <small>Scan ID</small>

              <strong>SCAN-2026-05-17-0012</strong>

            </div>


            <div className="scan-meta">

              <div>
                <small>Started At</small>
                <strong>May 17, 2026</strong>
                <span>12:00:35 AM</span>
              </div>

              <div>
                <small>Elapsed Time</small>
                <strong>◷ 00:12:45</strong>
              </div>

              <div>
                <small>Estimated Remaining</small>
                <strong>⌛ 00:06:15</strong>
              </div>

              <div>
                <small>Total Duration</small>
                <strong>◷ 00:19:00</strong>
              </div>

            </div>

          </div>

        </section>


        {/* LIVE STATISTICS */}
        <section className="live-statistics">

          <div className="section-heading">
            <h2>Live Scan Statistics</h2>
            <a href="#">View All</a>
          </div>


          <div className="statistics-grid">

            <div className="stat-card blue">
              <span className="stat-icon">▣</span>
              <small>Hosts Discovered</small>
              <strong>12</strong>
              <em>↑ 3 new</em>
            </div>

            <div className="stat-card cyan">
              <span className="stat-icon">♧</span>
              <small>Ports Scanned</small>
              <strong>1,248</strong>
              <em>↑ 312 new</em>
            </div>

            <div className="stat-card orange">
              <span className="stat-icon">⬡</span>
              <small>Vulnerabilities Found</small>
              <strong>24</strong>
              <em>↑ 6 new</em>
            </div>

            <div className="stat-card purple">
              <span className="stat-icon">➤</span>
              <small>Recon Requests</small>
              <strong>3,562</strong>
              <em>↑ 842 new</em>
            </div>

          </div>

        </section>
                {/* SCAN PHASES + LIVE FINDINGS */}
        <section className="running-middle-grid">

          {/* SCAN PHASES */}
          <div className="scan-phases-card">

            <div className="section-heading">
              <h2>Scan Phases</h2>
            </div>

            <div className="scan-phase-layout">

              <div className="phase-list">

                <div className="phase-item completed">
                  <span className="phase-number">1</span>
                  <span>Target Validation</span>
                  <strong>✓ Completed</strong>
                </div>

                <div className="phase-item completed">
                  <span className="phase-number">2</span>
                  <span>Host Discovery</span>
                  <strong>✓ Completed</strong>
                </div>

                <div className="phase-item completed">
                  <span className="phase-number">3</span>
                  <span>Port Scanning</span>
                  <strong>✓ Completed</strong>
                </div>

                <div className="phase-item active">
                  <span className="phase-number">4</span>
                  <span>Service Enumeration</span>
                  <strong>◌ In Progress</strong>
                </div>

                <div className="phase-item waiting">
                  <span className="phase-number">5</span>
                  <span>Vulnerability Detection</span>
                  <strong>— Waiting</strong>
                </div>

                <div className="phase-item waiting">
                  <span className="phase-number">6</span>
                  <span>Exploitation Tests</span>
                  <strong>— Waiting</strong>
                </div>

                <div className="phase-item waiting">
                  <span className="phase-number">7</span>
                  <span>Report Generation</span>
                  <strong>— Waiting</strong>
                </div>

              </div>


              {/* CURRENT PHASE */}
              <div className="current-phase">

                <small>Current Phase</small>

                <div className="current-phase-icon">
                  ◫
                </div>

                <h3>Service Enumeration</h3>

                <span className="phase-status">
                  In Progress
                </span>

                <p>
                  Identifying running services, versions,
                  and configurations on discovered ports.
                </p>

                <div className="phase-progress-header">
                  <span>Progress</span>
                  <strong>75%</strong>
                </div>

                <div className="phase-progress-bar">
                  <div className="phase-progress-value"></div>
                </div>

                <div className="current-task">
                  <small>Current Task</small>

                  <p>
                    Enumerating SSH service on 192.168.1.10:22
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* LIVE FINDINGS */}
          <div className="live-findings-card">

            <div className="section-heading">
              <h2>Live Findings (24)</h2>
              <a href="#">View All</a>
            </div>

            <div className="finding-list">

              <div className="finding-item">

                <span className="finding-severity high">
                  High
                </span>

                <div className="finding-content">
                  <strong>Outdated Server Version Detected</strong>
                  <span>Apache httpd 2.2.15</span>
                </div>

                <time>12:10:35 AM</time>

              </div>


              <div className="finding-item">

                <span className="finding-severity medium">
                  Medium
                </span>

                <div className="finding-content">
                  <strong>Directory Listing Enabled</strong>
                  <span>/admin/</span>
                </div>

                <time>12:09:58 AM</time>

              </div>


              <div className="finding-item">

                <span className="finding-severity low">
                  Low
                </span>

                <div className="finding-content">
                  <strong>Multiple HTTP Headers Found</strong>
                  <span>X-Powered-By, Server</span>
                </div>

                <time>12:09:12 AM</time>

              </div>


              <div className="finding-item">

                <span className="finding-severity info">
                  Info
                </span>

                <div className="finding-content">
                  <strong>SSL Certificate Information</strong>
                  <span>Valid until Dec 12, 2026</span>
                </div>

                <time>12:08:45 AM</time>

              </div>

            </div>

          </div>

        </section>

                {/* LIVE ACTIVITY + TARGET MAP */}
        <section className="running-bottom-grid">

          {/* LIVE ACTIVITY LOG */}
          <div className="activity-log-card">

            <div className="section-heading">
              <h2>Live Activity Log</h2>

              <div className="activity-actions">
                <button>Filter</button>
                <a href="#">View Full Logs</a>
              </div>
            </div>

            <div className="activity-log">

              <div className="activity-row">
                <time>12:10:35</time>
                <span className="log-type info">[INFO]</span>
                <p>Service enumeration started for discovered hosts.</p>
              </div>

              <div className="activity-row">
                <time>12:10:12</time>
                <span className="log-type success">[SUCCESS]</span>
                <p>Host 192.168.1.10 responded successfully.</p>
              </div>

              <div className="activity-row">
                <time>12:09:58</time>
                <span className="log-type info">[INFO]</span>
                <p>Scanning TCP services on port range 1–10000.</p>
              </div>

              <div className="activity-row">
                <time>12:09:42</time>
                <span className="log-type warning">[WARN]</span>
                <p>Potential outdated Apache service detected.</p>
              </div>

              <div className="activity-row">
                <time>12:09:12</time>
                <span className="log-type success">[SUCCESS]</span>
                <p>12 active hosts discovered.</p>
              </div>

              <div className="activity-row">
                <time>12:08:45</time>
                <span className="log-type info">[INFO]</span>
                <p>Target validation completed successfully.</p>
              </div>

            </div>

          </div>


          {/* TARGET MAP */}
          <div className="target-map-card">

            <div className="section-heading">
              <h2>Target Map</h2>
              <span className="map-status">12 Hosts</span>
            </div>

            <div className="target-map">

              <div className="map-line line-one"></div>
              <div className="map-line line-two"></div>
              <div className="map-line line-three"></div>
              <div className="map-line line-four"></div>


              <div className="target-node main-node">
                <span>◎</span>
                <strong>Target</strong>
                <small>example.com</small>
              </div>

              <div className="target-node host-one">
                <span>●</span>
                <small>web-01</small>
              </div>

              <div className="target-node host-two">
                <span>●</span>
                <small>api-01</small>
              </div>

              <div className="target-node host-three">
                <span>●</span>
                <small>db-01</small>
              </div>

              <div className="target-node host-four">
                <span>●</span>
                <small>cdn-01</small>
              </div>

            </div>

          </div>

        </section>


        {/* ENGINE STATUS */}
        <section className="engine-status-card">

          <div className="engine-status-item">

            <span className="engine-icon purple">⚙</span>

            <div>
              <small>Scanning Engine</small>
              <strong>Recon Engine v2.4.1</strong>
              <span className="engine-online">
                ● Online
              </span>
            </div>

          </div>


          <div className="engine-status-item">

            <span className="engine-icon blue">◫</span>

            <div>
              <small>Resource Usage</small>

              <strong>CPU 42% &nbsp; / &nbsp; RAM 3.2 GB</strong>

              <div className="resource-bar">
                <span></span>
              </div>
            </div>

          </div>


          <div className="engine-status-item">

            <span className="engine-icon cyan">↯</span>

            <div>
              <small>Scan Speed</small>
              <strong>287 req/sec</strong>
              <span className="engine-muted">
                Stable
              </span>
            </div>

          </div>


          <div className="engine-status-item">

            <span className="engine-icon red">!</span>

            <div>
              <small>Threats Found</small>
              <strong className="threat-count">24</strong>
              <span className="engine-muted">
                3 high severity
              </span>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default RunningScan;