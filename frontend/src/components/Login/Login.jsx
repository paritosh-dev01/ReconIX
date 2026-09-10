import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import "./Login.css";
import ReconIXLogo from "../../assets/logo/ReconIXLogo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login submitted");
    console.log("Remember me:", rememberMe);
  };

  return (
    <div className="login-page">

      {/* =========================================
          TOP HEADER
      ========================================= */}

      <header className="login-header">

        <div className="login-brand">

          <img
            src={ReconIXLogo}
            alt="ReconIX"
            className="login-logo"
          />

          <div className="login-brand-name">
            <h1>
            Recon<span>IX</span>
            </h1>
            <p>Reconnaissance Platform</p>
          </div>

        </div>

        <div className="login-header-actions">

          <button className="login-icon-btn">
            ◐
          </button>

          <button className="login-help-btn">
            <span>?</span>
            Need Help?
          </button>

        </div>

      </header>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main className="login-main">

        {/* =====================================
            LEFT SIDE
        ===================================== */}

        <section className="login-left">

          <div className="login-badge">
            <span>🛡</span>
               AUTOMATED RECONNAISSANCE PIPELINE
          </div>


          <h1 className="login-heading">

  <span className="login-heading-white">
    Uncover. Analyze.
  </span>

  <span className="login-heading-blue">
  <span className="secure-word">Secure</span> Everything.
  </span>

</h1>


          <p className="login-description">
            ReconIX empowers security teams to discover assets,
            identify vulnerabilities and secure the digital world
            with intelligent automation.
          </p>


          {/* =================================
              CENTRAL RECON VISUAL
          ================================= */}

          <div className="login-visual">

            <div className="login-world-glow"></div>

            <div className="login-scan-ring login-scan-ring-1"></div>
            <div className="login-scan-ring login-scan-ring-2"></div>
            <div className="login-scan-ring login-scan-ring-3"></div>

            <div className="login-shield-glow"></div>

            <img
              src={ReconIXLogo}
              alt="ReconIX shield"
              className="login-central-logo"
            />

          </div>


          {/* =================================
              FEATURE CARDS
          ================================= */}

          <div className="login-feature-list">

            <div className="login-feature-card">

              <div className="login-feature-icon">
                ◎
              </div>

              <div>
                <h3>Deep Reconnaissance</h3>

                <p>
                  Discover subdomains, open ports,
                  technologies and more.
                </p>
              </div>

            </div>


            <div className="login-feature-card">

              <div className="login-feature-icon">
                ⚡
              </div>

              <div>
                <h3>Automated Scanning</h3>

                <p>
                  Fast, accurate and scalable
                  scanning engine.
                </p>
              </div>

            </div>


            <div className="login-feature-card">

              <div className="login-feature-icon">
                ▥
              </div>

              <div>
                <h3>Advanced Analytics</h3>

                <p>
                  Visualize data and get actionable
                  security insights.
                </p>
              </div>

            </div>

          </div>


          {/* TRUST CARD */}

          <div className="login-trust-card">

            <div className="login-trust-icon">
              ♢
            </div>

            <span>
              Trusted by
            </span>

            <strong>
              10K+
            </strong>

            <span>
              security professionals worldwide
            </span>

          </div>

        </section>


        {/* =====================================
            RIGHT SIDE — LOGIN FORM
        ===================================== */}

        <section className="login-form-panel">

          <div className="login-form-inner">

            <h2 className="login-welcome">
              Welcome Back!
            </h2>

            <p className="login-form-subtitle">
              Sign in to your ReconIX account
            </p>


            <form onSubmit={handleSubmit}>

              {/* EMAIL */}

              <div className="login-field">

                <label>
                  Email Address
                </label>

                <div className="login-input-wrapper">

                  <Mail className="login-input-icon" size={18} />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>


              {/* PASSWORD */}

              <div className="login-field">

                <label>
                  Password
                </label>

                <div className="login-input-wrapper">

                  <Lock className="login-input-icon" size={18} />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                       setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                       <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>


              {/* REMEMBER + FORGOT */}

              <div className="login-options">

                <label className="remember-option">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                  />

                  <span className="custom-checkbox">
                    ✓
                  </span>

                  Remember me

                </label>


                <button
                  type="button"
                  className="forgot-password"
                >
                  Forgot Password?
                </button>

              </div>


              {/* SIGN IN */}

              <button
                type="submit"
                className="login-submit"
              >
                <span>
                  Sign In
                </span>

                <span className="login-arrow">
                  →
                </span>

              </button>

            </form>


            {/* DIVIDER */}

            <div className="login-divider">

              <span></span>

              <strong>
                OR
              </strong>

              <span></span>

            </div>


            {/* GOOGLE */}

              <button
                type="button"
                className="google-login"
              >
                <svg
                  className="google-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                 <path
                   fill="#4285F4"
                   d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.21 2.91-7.42z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 21.99c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.99z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M6.54 14.09a5.86 5.86 0 0 1 0-3.76V7.8H3.3a9.98 9.98 0 0 0 0 8.82l3.24-2.53z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 6.3c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.84 3.39 14.63 2.01 12 2.01A9.74 9.74 0 0 0 3.3 7.8l3.24 2.53C7.31 8.02 9.46 6.3 12 6.3z"
                  />
                </svg>

                Continue with Google
              </button>

            {/* CREATE ACCOUNT */}

            <div className="create-account">

              <span>
                Don't have an account?
              </span>

              <button type="button">
                Create Account
                <span>→</span>
              </button>

            </div>

          </div>

        </section>

      </main>


      {/* =========================================
          BOTTOM SECURITY BAR
      ========================================= */}

      <footer className="login-footer">

        <div className="login-security-items">

          <span>
            ♢
            Enterprise Grade Security
          </span>

          <b>•</b>

          <span>
            SOC 2 Compliant
          </span>

          <b>•</b>

          <span>
            End-to-End Encrypted
          </span>

        </div>


        <div className="login-copyright">
          © 2026 ReconIX. All rights reserved.
        </div>

      </footer>

    </div>
  );
}