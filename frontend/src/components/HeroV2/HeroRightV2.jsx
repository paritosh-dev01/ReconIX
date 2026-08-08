import "./HeroRightV2.css";
import ReconIXLogo from "../../assets/logo/ReconIXLogo.png";

export default function HeroRightV2() {
  return (
    <div className="hero-right-v2">

      <div className="live-recon-panel">

        {/* HEADER */}
        <div className="recon-panel-header">

          <div className="recon-status">
            <span className="status-dot"></span>
            LIVE RECON
          </div>

          <div className="recon-scan-id">
            SCAN #RX-2048
          </div>

        </div>


        {/* TARGET */}
        <div className="recon-target">

          <div className="target-label">
            TARGET
          </div>

          <div className="target-value">
            example.com
          </div>

          <div className="scan-progress">

            <div className="scan-progress-bar">
              <span></span>
            </div>

            <div className="scan-progress-info">
              <span>Scanning infrastructure...</span>
              <strong>72%</strong>
            </div>

          </div>

        </div>


        {/* CENTRAL VISUAL */}
        <div className="recon-core">

          <div className="world-grid"></div>

          <div className="scanner-ring ring-one"></div>
          <div className="scanner-ring ring-two"></div>
          <div className="scanner-ring ring-three"></div>

          <div className="scanner-sweep"></div>

          <div className="recon-shield">

  <div className="shield-glow"></div>

  <img
    src={ReconIXLogo}
    alt="ReconIX"
    className="central-recon-logo"
  />

  <div className="orbit orbit-one"></div>
  <div className="orbit orbit-two"></div>

</div>

        </div>


        {/* DISCOVERY DATA */}
        <div className="recon-data-grid">

          <div className="recon-data-card">

            <span className="data-icon">⌁</span>

            <div>
              <small>SUBDOMAINS</small>
              <strong>24</strong>
            </div>

          </div>


          <div className="recon-data-card">

            <span className="data-icon">◉</span>

            <div>
              <small>OPEN PORTS</small>
              <strong>18</strong>
            </div>

          </div>


          <div className="recon-data-card">

            <span className="data-icon">◇</span>

            <div>
              <small>TECHNOLOGIES</small>
              <strong>12</strong>
            </div>

          </div>


          <div className="recon-data-card vulnerability">

            <span className="data-icon">⚠</span>

            <div>
              <small>VULNERABILITIES</small>
              <strong>03</strong>
            </div>

          </div>

        </div>


        {/* ACTIVITY */}
        <div className="recon-activity">

          <div className="activity-title">
            <span>RECON ACTIVITY</span>
            <span className="activity-live">● LIVE</span>
          </div>


          <div className="activity-line">
            <span className="activity-pulse"></span>
            Enumerating subdomains...
            <strong>done</strong>
          </div>

          <div className="activity-line">
            <span className="activity-pulse"></span>
            Mapping open ports...
            <strong>done</strong>
          </div>

          <div className="activity-line active">
            <span className="activity-pulse"></span>
            Fingerprinting technologies...
            <strong>72%</strong>
          </div>

        </div>

      </div>

    </div>
  );
}