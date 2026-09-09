import "./ScanResults.css";
import reconixLogo from "../../assets/logo/ReconIXLogo.png";

function ScanResults() {
  return (
    <div className="scan-results-page">

      {/* ================= SIDEBAR ================= */}
      <aside className="scan-results-sidebar">

        <div className="scan-results-brand">
          <img src={reconixLogo} alt="ReconIX Logo" />
          <span>ReconIX</span>
        </div>

        <nav className="scan-results-nav">

          <a href="#">⌂ <span>Dashboard</span></a>
          <a href="#">▣ <span>Assets</span></a>

          <a href="#" className="active">
            ◉ <span>Scans</span>
          </a>

          <a href="#">◈ <span>Vulnerabilities</span></a>
          <a href="#">◉ <span>Threat Intelligence</span></a>
          <a href="#">▤ <span>Reports</span></a>
          <a href="#">♙ <span>Automation</span></a>
          <a href="#">✧ <span>Integrations</span></a>
          <a href="#">⚙ <span>Settings</span></a>

        </nav>


        {/* ENTERPRISE PLAN */}
        <div className="scan-results-plan">

          <div className="plan-icon">♛</div>

          <h3>Enterprise Plan</h3>

          <p>
            Unlock advanced features
            and unlimited scans.
          </p>

          <button>Upgrade Now</button>

        </div>


        {/* SYSTEM STATUS */}
        <div className="scan-results-system">

          <div className="system-title">
            <span>System Status</span>
            <span>→</span>
          </div>

          <div className="system-check">✓</div>

          <strong>All Systems Secure</strong>

          <p>Everything is running smoothly.</p>

        </div>


        <div className="collapse-sidebar">
          « &nbsp; Collapse
        </div>

      </aside>


      {/* ================= MAIN ================= */}
      <main className="scan-results-main">

        {/* TOP BAR */}
        <header className="scan-results-topbar">

          <div className="breadcrumbs">
            <span>Dashboard</span>
            <b>›</b>
            <span>Scans</span>
            <b>›</b>
            <strong>Scan Results</strong>
          </div>


          <div className="topbar-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search assets, scans, vulnerabilities..."
            />
            <kbd>⌘ K</kbd>
          </div>


          <div className="topbar-user">

            <div className="topbar-icon">
              ♧
              <small>12</small>
            </div>

            <div className="topbar-icon">?</div>
            <div className="topbar-icon">☾</div>

            <div className="user-avatar">A</div>

            <div className="user-info">
              <strong>Admin</strong>
              <span>Administrator⌄</span>
            </div>

          </div>

        </header>


        {/* ================= PAGE HEADER ================= */}
        <section className="scan-results-header">

          <div className="results-title-area">

            <div className="results-title-icon">
              ✓
            </div>

            <div>
              <div className="results-title-row">

                <h1>Scan Results</h1>

                <span className="completed-badge">
                  ✓ Completed
                </span>

              </div>

              <p>
                Scan completed successfully on May 17, 2026 at 12:45 AM
              </p>
            </div>

          </div>


          <div className="results-actions">

            <button className="secondary-action">
              ↗ Share
            </button>

            <button className="secondary-action">
              ⇩ Export⌄
            </button>

            <button className="download-action">
              ↓ Download Report⌄
            </button>

          </div>

        </section>


        {/* ================= SUMMARY GRID ================= */}
        <section className="results-summary-grid">


          {/* SECURITY SCORE */}
          <div className="results-card security-score-card">

            <div className="card-heading">
              <h2>Security Score</h2>
              <span>ⓘ</span>
            </div>

            <div className="score-content">

              <div className="score-ring">

                <div className="score-ring-inner">
                  <strong>82</strong>
                  <span>/ 100</span>
                </div>

              </div>

              <div className="score-details">

                <div className="score-grade">
                  B
                </div>

                <strong>Very Good</strong>

                <p>
                  Your security posture is strong.
                  Keep up the good work!
                </p>

              </div>

            </div>

            <div className="risk-box">
              <span>Overall Risk</span>
              <strong>LOW RISK</strong>
            </div>

          </div>


          {/* EXECUTIVE SUMMARY */}
          <div className="results-card executive-card">

            <div className="card-heading">
              <h2>Executive Summary</h2>
              <span>ⓘ</span>
            </div>

            <div className="summary-list">

              <div>
                <span>Total Vulnerabilities</span>
                <strong>46</strong>
              </div>

              <div>
                <span>Critical</span>
                <strong className="critical-text">3</strong>
              </div>

              <div>
                <span>High</span>
                <strong className="high-text">8</strong>
              </div>

              <div>
                <span>Medium</span>
                <strong className="medium-text">11</strong>
              </div>

              <div>
                <span>Low</span>
                <strong className="low-text">24</strong>
              </div>

              <div>
                <span>Informational</span>
                <strong className="info-text">36</strong>
              </div>

            </div>

            <div className="summary-mini-grid">

              <div>
                <span>◷ Scan Duration</span>
                <strong>00:19:00</strong>
              </div>

              <div>
                <span>▦ Assets Scanned</span>
                <strong>12</strong>
              </div>

            </div>

          </div>


          {/* VULNERABILITY DISTRIBUTION */}
          <div className="results-card vulnerability-card">

            <div className="card-heading">
              <h2>Vulnerability Distribution</h2>
              <span>ⓘ</span>
            </div>

            <div className="distribution-content">

              <div className="distribution-ring">

                <div>
                  <strong>46</strong>
                  <span>Total</span>
                </div>

              </div>


              <div className="distribution-list">

                <div>
                  <i className="dot critical"></i>
                  <span>Critical</span>
                  <strong>3</strong>
                </div>

                <div>
                  <i className="dot high"></i>
                  <span>High</span>
                  <strong>8</strong>
                </div>

                <div>
                  <i className="dot medium"></i>
                  <span>Medium</span>
                  <strong>11</strong>
                </div>

                <div>
                  <i className="dot low"></i>
                  <span>Low</span>
                  <strong>24</strong>
                </div>

              </div>

            </div>

            <a href="#" className="view-link">
              View all vulnerabilities →
            </a>

          </div>

        </section>


        {/* ================= METRICS ================= */}
        <section className="results-metrics">

          <div className="metric-box">
            <span>◉</span>
            <small>Total Assets</small>
            <strong>356</strong>
            <em>+24 discovered</em>
          </div>

          <div className="metric-box">
            <span>♢</span>
            <small>Open Ports</small>
            <strong>27</strong>
            <em>+6 detected</em>
          </div>

          <div className="metric-box">
            <span>◇</span>
            <small>Technologies</small>
            <strong>14</strong>
            <em>+3 detected</em>
          </div>

          <div className="metric-box">
            <span>!</span>
            <small>Vulnerabilities</small>
            <strong>46</strong>
            <em className="danger-em">3 critical</em>
          </div>

        </section>


        {/* ================= TABS ================= */}
        <div className="results-tabs">

          <button className="active">Overview</button>
          <button>Assets</button>
          <button>Ports</button>
          <button>Technologies</button>
          <button>DNS</button>
          <button>HTTP</button>

        </div>


        {/* ================= LOWER GRID ================= */}
        <section className="results-lower-grid">


          {/* CRITICAL FINDINGS */}
          <div className="results-card findings-card">

            <div className="card-heading">

              <h2>Recent Critical Findings</h2>

              <a href="#" className="view-link">
                View All →
              </a>

            </div>


            <div className="findings-table">

              <div className="finding-header">
                <span>ID</span>
                <span>Vulnerability</span>
                <span>Asset</span>
                <span>Severity</span>
                <span>CVSS</span>
                <span>Status</span>
              </div>


              <div className="finding-row">

                <span>VULN-001</span>
                <strong>SQL Injection</strong>
                <span>/login.php</span>
                <b className="severity critical-bg">Critical</b>
                <strong>9.8</strong>
                <span className="open-status">● Open</span>

              </div>


              <div className="finding-row">

                <span>VULN-002</span>
                <strong>Remote Code Execution</strong>
                <span>/api/upload</span>
                <b className="severity critical-bg">Critical</b>
                <strong>9.1</strong>
                <span className="open-status">● Open</span>

              </div>


              <div className="finding-row">

                <span>VULN-003</span>
                <strong>Broken Access Control</strong>
                <span>/admin/*</span>
                <b className="severity critical-bg">Critical</b>
                <strong>8.7</strong>
                <span className="open-status">● Open</span>

              </div>


              <div className="finding-row">

                <span>VULN-004</span>
                <strong>Insecure Deserialization</strong>
                <span>/api/data</span>
                <b className="severity critical-bg">Critical</b>
                <strong>8.6</strong>
                <span className="open-status">● Open</span>

              </div>

            </div>

          </div>


          {/* AFFECTED ASSETS */}
          <div className="results-card affected-card">

            <div className="card-heading">

              <h2>Affected Assets</h2>

              <span className="card-count">12</span>

            </div>


            <div className="affected-list">

              <div>
                <span className="asset-type-icon">◎</span>
                <span>Web Applications</span>
                <strong>5</strong>
              </div>

              <div>
                <span className="asset-type-icon">◇</span>
                <span>Subdomains</span>
                <strong>4</strong>
              </div>

              <div>
                <span className="asset-type-icon">◈</span>
                <span>IP Addresses</span>
                <strong>2</strong>
              </div>

              <div>
                <span className="asset-type-icon">▣</span>
                <span>APIs</span>
                <strong>1</strong>
              </div>

            </div>


            <a href="#" className="view-link">
              View all assets →
            </a>

          </div>


          {/* TOP PORTS */}
          <div className="results-card ports-card">

            <div className="card-heading">
              <h2>Top Open Ports</h2>
              <span>27 Open</span>
            </div>

            <div className="port-list">

              <div>
                <strong>80</strong>
                <span>HTTP</span>
                <b>12</b>
              </div>

              <div>
                <strong>443</strong>
                <span>HTTPS</span>
                <b>9</b>
              </div>

              <div>
                <strong>22</strong>
                <span>SSH</span>
                <b>3</b>
              </div>

              <div>
                <strong>3306</strong>
                <span>MySQL</span>
                <b>2</b>
              </div>

            </div>

          </div>


          {/* TECHNOLOGIES */}
          <div className="results-card technologies-card">

            <div className="card-heading">
              <h2>Technologies Detected</h2>
              <span>14</span>
            </div>

            <div className="technology-tags">

              <span>Nginx <b>1.24</b></span>
              <span>React <b>18</b></span>
              <span>Cloudflare</span>
              <span>PHP <b>8.2</b></span>
              <span>jQuery <b>3.7</b></span>
              <span>Google Analytics</span>

            </div>

          </div>


          {/* RECOMMENDED NEXT STEPS */}
          <div className="results-card recommendations-card">

            <div className="card-heading">
              <h2>Recommended Next Steps</h2>
            </div>

            <div className="recommendations">

              <div>
                <b>1</b>
                <span>Fix all critical vulnerabilities immediately</span>
              </div>

              <div>
                <b>2</b>
                <span>Address high-risk vulnerabilities</span>
              </div>

              <div>
                <b>3</b>
                <span>Re-scan to verify fixes</span>
              </div>

              <div>
                <b>4</b>
                <span>Implement security best practices</span>
              </div>

            </div>

            <button className="remediation-btn">
              View Remediation Guide →
            </button>

          </div>


          {/* REPORT DETAILS */}
          <div className="results-card report-details-card">

            <div className="card-heading">
              <h2>Report Details</h2>
            </div>

            <div className="report-details-list">

              <div>
                <span>Generated On</span>
                <strong>May 17, 2026</strong>
              </div>

              <div>
                <span>Template</span>
                <strong>Executive Report v2.1</strong>
              </div>

              <div>
                <span>Scan Engine</span>
                <strong>ReconIX Engine v2.5</strong>
              </div>

              <div>
                <span>Data Sources</span>
                <strong>12</strong>
              </div>

              <div>
                <span>Pages</span>
                <strong>24</strong>
              </div>

            </div>

            <div className="classification">
              🔒 Internal Use Only
            </div>

          </div>

        </section>


        <footer className="scan-results-footer">
          © 2026 ReconIX. All rights reserved.
          <span>v1.0.0</span>
        </footer>

      </main>

    </div>
  );
}

export default ScanResults;