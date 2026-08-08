import {
  Mail,
  Lock,
  ShieldCheck,
  Moon,
  Radar,
  Zap,
  BarChart3,
  ArrowLeft,
  Send,
  CircleHelp,
} from "lucide-react";

import "./ForgotPassword.css";

import ReconIXLogo from "../../assets/logo/ReconIXLogo.png";

export default function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Password reset requested");
  };

  return (
    <div className="forgot-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="forgot-header">

        <div className="forgot-header-brand">

          <img
            src={ReconIXLogo}
            alt="ReconIX"
            className="forgot-header-logo"
          />

          <div className="forgot-header-name">
            Recon<span>IX</span>
          </div>

        </div>


        <div className="forgot-header-actions">

          <button
            type="button"
            className="forgot-theme-btn"
            aria-label="Toggle theme"
          >
            <Moon size={21} />
          </button>

          <button
            type="button"
            className="forgot-help-btn"
          >
            <CircleHelp size={20} />
            Need Help?
          </button>

        </div>

      </header>


      {/* =========================================
          MAIN
      ========================================= */}

      <main className="forgot-main">

        {/* =======================================
            LEFT SIDE
        ======================================= */}

        <section className="forgot-left">

          <div className="forgot-brand-block">

            <div className="forgot-brand-row">

              <img
                src={ReconIXLogo}
                alt="ReconIX"
                className="forgot-brand-logo"
              />

              <h1>
                Recon<span>IX</span>
              </h1>

            </div>


            <div className="forgot-tagline">

              <span>Discover</span>

              <b>•</b>

              <span>Analyze</span>

              <b>•</b>

              <span>Secure</span>

            </div>


            <p>
              Advanced reconnaissance automation platform
              built for security professionals and ethical
              hackers worldwide.
            </p>

          </div>


          {/* =====================================
              CENTRAL VISUAL
          ===================================== */}

          <div className="forgot-visual">

            <div className="forgot-world"></div>

            <div className="forgot-orbit forgot-orbit-a"></div>
            <div className="forgot-orbit forgot-orbit-b"></div>
            <div className="forgot-orbit forgot-orbit-c"></div>

            <div className="forgot-scan-platform">

              <div></div>
              <div></div>
              <div></div>

            </div>

            <div className="forgot-shield-glow"></div>

            <img
              src={ReconIXLogo}
              alt="ReconIX Shield"
              className="forgot-central-logo"
            />

          </div>


          {/* =====================================
              FEATURE CARDS
          ===================================== */}

          <div className="forgot-feature-list">

            <div className="forgot-feature-card">

              <div className="forgot-feature-icon">
                <Radar size={25} />
              </div>

              <div>

                <h3>
                  Smart Automation
                </h3>

                <p>
                  Automate recon tasks and discover
                  assets with intelligent workflows.
                </p>

              </div>

            </div>


            <div className="forgot-feature-card">

              <div className="forgot-feature-icon">
                <Zap size={25} />
              </div>

              <div>

                <h3>
                  Deep Visibility
                </h3>

                <p>
                  Gain deep visibility into attack
                  surfaces and vulnerabilities.
                </p>

              </div>

            </div>


            <div className="forgot-feature-card">

              <div className="forgot-feature-icon">
                <BarChart3 size={25} />
              </div>

              <div>

                <h3>
                  Actionable Insights
                </h3>

                <p>
                  Turn data into actionable insights
                  and stay ahead of threats.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================
              ENTERPRISE SECURITY CARD
          ===================================== */}

          <div className="forgot-security-card">

            <div className="forgot-security-heading">

              <div className="forgot-security-shield">

                <ShieldCheck size={30} />

              </div>

              <div>

                <h2>
                  ENTERPRISE GRADE SECURITY
                </h2>

                <p>
                  Your security is our top priority.
                  Built with industry best practices
                  and trusted by security professionals
                  worldwide.
                </p>

              </div>

            </div>


            <div className="forgot-security-badges">

              <div>
                <Lock size={22} />
                <span>
                  End-to-End
                  <small>Encrypted</small>
                </span>
              </div>

              <div>
                <ShieldCheck size={22} />
                <span>
                  SOC 2
                  <small>Compliant</small>
                </span>
              </div>

              <div>
                <BarChart3 size={22} />
                <span>
                  ISO 27001
                  <small>Certified</small>
                </span>
              </div>

              <div>
                <Radar size={22} />
                <span>
                  Trusted
                  <small>Worldwide</small>
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =======================================
            RIGHT SIDE
        ======================================= */}

        <section className="forgot-form-panel">

          <div className="forgot-form-inner">

            {/* ICON */}

            <div className="forgot-form-icon">

              <Mail size={34} />

              <Lock
                size={17}
                className="forgot-form-lock"
              />

            </div>


            {/* HEADING */}

            <h2 className="forgot-title">
              Forgot Your Password?
            </h2>

            <p className="forgot-subtitle">
              No worries! Enter your registered email address
              and we'll send you a secure link to reset your password.
            </p>


            {/* FORM */}

            <form onSubmit={handleSubmit}>

              <div className="forgot-field">

                <label>
                  Email Address
                </label>

                <div className="forgot-input-wrapper">

                  <Mail
                    className="forgot-input-icon"
                    size={22}
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>


              {/* SEND RESET LINK */}

              <button
                type="submit"
                className="forgot-submit"
              >

                <Send size={21} />

                <span>
                  Send Reset Link
                </span>

              </button>

            </form>


            {/* DIVIDER */}

            <div className="forgot-divider">

              <span></span>

              <strong>
                OR
              </strong>

              <span></span>

            </div>


            {/* BACK TO LOGIN */}

            <button
              type="button"
              className="forgot-back-login"
            >

              <ArrowLeft size={20} />

              <span>
                Back to Login
              </span>

            </button>


            {/* INFORMATION BOX */}

            <div className="forgot-info-box">

              <div className="forgot-info-icon">

                <ShieldCheck size={28} />

              </div>

              <div>

                <h3>
                  Reset link will be sent to your email
                </h3>

                <p>
                  Please check your inbox and follow
                  the instructions.
                </p>

              </div>

            </div>


            {/* SECURITY NOTE */}

            <div className="forgot-security-note">

              <Lock size={20} />

              <p>
                For your security, password reset links expire
                after 15 minutes.
                <br />
                If you don't receive the email, check your spam folder.
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="forgot-footer">

        <div className="forgot-copyright">
          © 2026 ReconIX. All rights reserved.
        </div>


        <div className="forgot-footer-links">

          <span>
            <ShieldCheck size={18} />
            Privacy Policy
          </span>

          <span>
            <ShieldCheck size={18} />
            Terms of Service
          </span>

          <span>
            <CircleHelp size={18} />
            Contact Support
          </span>

        </div>


        <div className="forgot-system-status">

          <ShieldCheck size={17} />

          All Systems Secure

        </div>

      </footer>

    </div>
  );
}