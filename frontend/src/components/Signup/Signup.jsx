import {
  User,
  AtSign,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  ShieldCheck,
  Moon,
  Radar,
  Zap,
  BarChart3,
  LogIn,
} from "lucide-react";

import { useState } from "react";
import "./Signup.css";

import ReconIXLogo from "../../assets/logo/ReconIXLogo.png";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    console.log("Signup submitted");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        {/* =========================================
            TOP HEADER
        ========================================= */}
        <header className="signup-header">
          <div className="signup-brand">
            <img
              src={ReconIXLogo}
              alt="ReconIX"
              className="signup-logo"
            />
            <div className="signup-brand-text-group">
              <div className="signup-brand-name">
                Recon<span>IX</span>
              </div>
              <span className="signup-brand-subtitle">Reconnaissance Platform</span>
            </div>
          </div>

          <div className="signup-header-actions">
            <button className="signup-icon-btn">
              <Moon size={18} />
            </button>

            <span className="signup-existing-text">
              Already have an account?
            </span>

            <button className="signup-login-btn">
              <LogIn size={16} />
              Login
            </button>
          </div>
        </header>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}
        <main className="signup-main">

          {/* =====================================
              LEFT SIDE
          ==================================== */}
          <section className="signup-left">

            <div className="signup-badge">
              <span>🛡</span>
              AUTOMATED RECONNAISSANCE PIPELINE
            </div>

            <h1 className="signup-heading">
              <span className="signup-heading-white">
                Discover. Analyze.
              </span>
              <span className="signup-heading-blue">
                <span className="secure-word">Secure</span> Everything.
              </span>
            </h1>

            <p className="signup-description">
              ReconIX empowers security teams to discover assets,
              identify vulnerabilities and secure the digital world
              with intelligent automation.
            </p>

            {/* =====================================
                CENTRAL RECON VISUAL
            ===================================== */}
            <div className="signup-visual">
              <div className="signup-world-glow"></div>
              <div className="signup-scan-ring signup-scan-ring-1"></div>
              <div className="signup-scan-ring signup-scan-ring-2"></div>
              <div className="signup-scan-ring signup-scan-ring-3"></div>
              <div className="signup-shield-glow"></div>
              <img
                src={ReconIXLogo}
                alt="ReconIX shield"
                className="signup-central-logo"
              />
            </div>

            {/* =====================================
                FEATURE CARDS
            ===================================== */}
            <div className="signup-feature-list">
              <div className="signup-feature-card">
                <div className="signup-feature-icon">◎</div>
                <div>
                  <h3>Deep Reconnaissance</h3>
                  <p>Discover subdomains, open ports, technologies and more.</p>
                </div>
              </div>

              <div className="signup-feature-card">
                <div className="signup-feature-icon">⚡</div>
                <div>
                  <h3>Automated Scanning</h3>
                  <p>Fast, accurate and scalable scanning engine.</p>
                </div>
              </div>

              <div className="signup-feature-card">
                <div className="signup-feature-icon">▥</div>
                <div>
                  <h3>Advanced Analytics</h3>
                  <p>Visualize data and get actionable security insights.</p>
                </div>
              </div>
            </div>

            {/* TRUST CARD */}
            <div className="signup-trust-card">
              <div className="signup-trust-icon">♢</div>
              <span>Trusted by</span>
              <strong>10K+</strong>
              <span>security professionals worldwide</span>
            </div>

          </section>

          {/* =====================================
              RIGHT SIDE — SIGNUP FORM
          ===================================== */}
          <section className="signup-form-panel">
            <div className="signup-form-inner">

              <h2 className="signup-welcome">
                Create Your Account
              </h2>
              <p className="signup-form-subtitle">
                Join ReconIX and supercharge your security operations.
              </p>

              <form onSubmit={handleSubmit}>

                {/* FULL NAME + USERNAME */}
                <div className="signup-two-column">
                  <div className="signup-field">
                    <label>Full Name</label>
                    <div className="signup-input-wrapper">
                      <User className="signup-input-icon" size={18} />
                      <input type="text" placeholder="Enter your full name" required />
                    </div>
                  </div>

                  <div className="signup-field">
                    <label>Username</label>
                    <div className="signup-input-wrapper">
                      <AtSign className="signup-input-icon" size={18} />
                      <input type="text" placeholder="Choose a username" required />
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="signup-field">
                  <label>Email Address</label>
                  <div className="signup-input-wrapper">
                    <Mail className="signup-input-icon" size={18} />
                    <input type="email" placeholder="you@example.com" required />
                  </div>
                </div>

                {/* PASSWORD + CONFIRM */}
                <div className="signup-two-column">
                  <div className="signup-field">
                    <label>Password</label>
                    <div className="signup-input-wrapper">
                      <Lock className="signup-input-icon" size={18} />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create password"
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="signup-field">
                    <label>Confirm Password</label>
                    <div className="signup-input-wrapper">
                      <Lock className="signup-input-icon" size={18} />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* TERMS */}
                <label className="signup-terms">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  <span className="custom-checkbox">✓</span>
                  <span>
                    I agree to the <button type="button" className="signup-link-inline">Terms of Service</button> and <button type="button" className="signup-link-inline">Privacy Policy</button>
                  </span>
                </label>

                {/* SUBMIT */}
                <button type="submit" className="signup-submit">
                  <span>Create Account</span>
                  <span className="signup-arrow">→</span>
                </button>

              </form>

              {/* DIVIDER */}
              <div className="signup-divider">
                <span></span>
                <strong>OR</strong>
                <span></span>
              </div>

              {/* GOOGLE */}
              <button type="button" className="google-signup">
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.21 2.91-7.42z"/>
                  <path fill="#34A853" d="M12 21.99c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.99z"/>
                  <path fill="#FBBC05" d="M6.54 14.09a5.86 5.86 0 0 1 0-3.76V7.8H3.3a9.98 9.98 0 0 0 0 8.82l3.24-2.53z"/>
                  <path fill="#EA4335" d="M12 6.3c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.39 14.63 2.01 12 2.01A9.74 9.74 0 0 0 3.3 7.8l3.24 2.53C7.31 8.02 9.46 6.3 12 6.3z"/>
                </svg>
                Sign up with Google
              </button>

              {/* LOGIN LINK */}
              <div className="create-account">
                <span>Already have an account?</span>
                <button type="button">Login <span>→</span></button>
              </div>

            </div>
          </section>

        </main>

        {/* =========================================
            BOTTOM SECURITY BAR
        ========================================= */}
        <footer className="signup-footer">
          <div className="signup-security-items">
            <span>♢ Enterprise Grade Security</span>
            <b>•</b>
            <span>SOC 2 Compliant</span>
            <b>•</b>
            <span>End-to-End Encrypted</span>
          </div>
          <div className="signup-copyright">
            © 2026 ReconIX. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  );
}