import React from "react";
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
    alert("Password reset link has been sent to your email!");
  };

  return (
    <div className="forgot-page">
      {/* HEADER */}
      <header className="forgot-header">
        <div
          className="forgot-header-brand"
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={ReconIXLogo}
            alt="ReconIX"
            className="forgot-header-logo"
          />
          <div className="forgot-brand-text">
            <div className="forgot-header-name">
              Recon<span>IX</span>
            </div>
            <span className="forgot-header-sub">Reconnaissance Platform</span>
          </div>
        </div>

        <div className="forgot-header-actions">
          <button
            type="button"
            className="forgot-theme-btn"
            aria-label="Toggle theme"
          >
            <Moon size={20} />
          </button>

          <button type="button" className="forgot-help-btn">
            <CircleHelp size={18} />
            <span>Need Help?</span>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="forgot-main">
        {/* LEFT SIDE — EXACT MATCH WITH LOGIN & SIGNUP */}
        <section className="forgot-left">
          <div className="forgot-badge">
            <span>🛡</span> AUTOMATED RECONNAISSANCE PIPELINE
          </div>

          <h1 className="forgot-heading">
            <span className="forgot-heading-white">Discover. Analyze.</span>
            <span className="forgot-heading-blue">
              <span className="secure-word">Secure</span> Everything.
            </span>
          </h1>

          <p className="forgot-description">
            ReconIX empowers security teams to discover assets, identify vulnerabilities and secure the digital world with intelligent automation.
          </p>

          {/* CENTRAL RECON VISUAL (EXACT SAME AS LOGIN & SIGNUP) */}
          <div className="forgot-visual">
            <div className="forgot-world-glow"></div>
            <div className="forgot-scan-ring forgot-scan-ring-1"></div>
            <div className="forgot-scan-ring forgot-scan-ring-2"></div>
            <div className="forgot-scan-ring forgot-scan-ring-3"></div>
            <div className="forgot-shield-glow"></div>
            <img
              src={ReconIXLogo}
              alt="ReconIX shield"
              className="forgot-central-logo"
            />
          </div>

          {/* FEATURE CARDS */}
          <div className="forgot-feature-list">
            <div className="forgot-feature-card">
              <div className="forgot-feature-icon">
                <Radar size={22} />
              </div>
              <div>
                <h3>Smart Automation</h3>
                <p>Automate recon tasks and discover assets with intelligent workflows.</p>
              </div>
            </div>

            <div className="forgot-feature-card">
              <div className="forgot-feature-icon">
                <Zap size={22} />
              </div>
              <div>
                <h3>Deep Visibility</h3>
                <p>Gain deep visibility into attack surfaces and vulnerabilities.</p>
              </div>
            </div>

            <div className="forgot-feature-card">
              <div className="forgot-feature-icon">
                <BarChart3 size={22} />
              </div>
              <div>
                <h3>Actionable Insights</h3>
                <p>Turn data into actionable insights and stay ahead of threats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE — FORM */}
        <section className="forgot-form-panel">
          <div className="forgot-form-inner">
            <div className="forgot-form-icon">
              <Mail size={32} />
              <Lock size={15} className="forgot-form-lock" />
            </div>

            <h2 className="forgot-title">Forgot Your Password?</h2>
            <p className="forgot-subtitle">
              No worries! Enter your registered email address and we'll send you
              a secure link to reset your password.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="forgot-field">
                <label>Email Address</label>
                <div className="forgot-input-wrapper">
                  <Mail className="forgot-input-icon" size={20} />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="forgot-submit">
                <Send size={19} />
                <span>Send Reset Link</span>
              </button>
            </form>

            <div className="forgot-divider">
              <span></span>
              <strong>OR</strong>
              <span></span>
            </div>

            <button
              type="button"
              className="forgot-back-login"
              onClick={() => (window.location.href = "/login")}
            >
              <ArrowLeft size={19} />
              <span>Back to Login</span>
            </button>

            <div className="forgot-info-box">
              <div className="forgot-info-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3>Reset link will be sent to your email</h3>
                <p>Please check your inbox and follow the instructions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="forgot-footer">
        <div className="forgot-copyright">
          © 2026 ReconIX. All rights reserved.
        </div>
        <div className="forgot-system-status">
          <ShieldCheck size={16} />
          All Systems Secure
        </div>
      </footer>
    </div>
  );
}