import "./HeroLeft.css";

export default function HeroLeft() {
  return (
    <div className="hero-left">

      <div className="hero-badge">
        🛡 AUTOMATED RECONNAISSANCE PIPELINE
      </div>

      <h1 className="hero-title">
        <span className="white">Automated</span>

        <span className="gradient">
          Reconnaissance
        </span>

        <span className="white">
          Pipeline
        </span>
      </h1>

      <p className="hero-description">
        Discover assets, identify vulnerabilities,
        and generate actionable reports —
        all in one powerful platform.
      </p>

      <div className="hero-buttons">

        <button className="primary-btn">
          🚀 Start New Scan
        </button>

        <button className="secondary-btn">
          👤 Login to Account
        </button>

      </div>

    </div>
  );
}