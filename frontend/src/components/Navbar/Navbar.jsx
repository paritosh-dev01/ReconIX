import "./Navbar.css";
import ReconIXLogo from "../../assets/logo/ReconIXLogo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        <div className="logo">

  <div className="logo-icon">

<img
src={ReconIXLogo}
alt="ReconIX Logo"
className="logo-svg"
/>

</div>

  <div className="logo-text">

    <h1>
      Recon<span>IX</span>
    </h1>

    <p>Reconnaissance Platform</p>

  </div>

</div>

        <ul className="nav-links">

          <li>Features</li>

          <li>How It Works</li>

          <li>Pricing</li>

          <li>About Us</li>

          <li>Resources ▼</li>

          <li>Contact</li>

        </ul>

        <div className="nav-buttons">

          <button
  className="login-btn"
  onClick={() => {
    window.location.href = "/login";
  }}
>
  👤 Login
</button>

          <button className="start-btn">
            Get Started →
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;