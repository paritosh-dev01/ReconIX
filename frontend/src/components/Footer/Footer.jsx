import "./Footer.css";
import ReconIXLogo from "../../assets/logo/ReconIXLogo.png";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <div className="footer-logo">
            <img
              src={ReconIXLogo}
              alt="ReconIX Logo"
              className="footer-logo-img"
            />
          </div>

          <h2>
            Recon<span>IX</span>
          </h2>

          <p>
            Automated reconnaissance platform for
            discovering assets, identifying vulnerabilities,
            and generating professional reports.
          </p>

        </div>


        {/* Product */}

        <div className="footer-column">

          <h3>Product</h3>

          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Pricing</a>
          <a href="#">Roadmap</a>

        </div>


        {/* Company */}

        <div className="footer-column">

          <h3>Company</h3>

          <a href="#">About</a>
          <a href="#">Resources</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>

        </div>


        {/* Legal */}

        <div className="footer-column">

          <h3>Legal</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Security</a>
          <a href="#">Support</a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 ReconIX. All Rights Reserved.
        </p>

        <div className="footer-social">

          <span>GitHub</span>
          <span>LinkedIn</span>
          <span>Twitter</span>

        </div>

      </div>

    </footer>
  );
}