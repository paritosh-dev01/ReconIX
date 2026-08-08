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

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="signup-header">

        <div className="signup-header-brand">

          <img
            src={ReconIXLogo}
            alt="ReconIX"
            className="signup-header-logo"
          />

          <div className="signup-header-name">
            Recon<span>IX</span>
          </div>

        </div>


        <div className="signup-header-right">

          <button
            type="button"
            className="signup-theme-btn"
            aria-label="Toggle theme"
          >
            <Moon size={21} />
          </button>

          <span className="signup-existing-text">
            Already have an account?
          </span>

          <button
            type="button"
            className="signup-login-btn"
          >
            <LogIn size={17} />
            Login
          </button>

        </div>

      </header>


      {/* =========================================
          MAIN
      ========================================= */}

      <main className="signup-main">

        {/* =======================================
            LEFT SIDE
        ======================================= */}

        <section className="signup-left">

          <div className="signup-brand-block">

            <div className="signup-brand-row">

              <img
                src={ReconIXLogo}
                alt="ReconIX"
                className="signup-brand-logo"
              />

              <h1>
                Recon<span>IX</span>
              </h1>

            </div>


            <div className="signup-tagline">
              <span>Discover</span>
              <b>•</b>
              <span>Analyze</span>
              <b>•</b>
              <span>Secure</span>
            </div>


            <p>
              Create your account and start your journey
              with the most advanced reconnaissance
              platform for security teams.
            </p>

          </div>


          {/* =====================================
              CENTRAL VISUAL
          ===================================== */}

          <div className="signup-visual">

            <div className="signup-world"></div>

            <div className="signup-orbit orbit-a"></div>
            <div className="signup-orbit orbit-b"></div>
            <div className="signup-orbit orbit-c"></div>

            <div className="signup-scan-platform">

              <div></div>
              <div></div>
              <div></div>

            </div>


            <div className="signup-shield-glow"></div>

            <img
              src={ReconIXLogo}
              alt="ReconIX Shield"
              className="signup-central-logo"
            />

          </div>


          {/* =====================================
              FEATURE CARDS
          ===================================== */}

          <div className="signup-feature-list">

            <div className="signup-feature-card">

              <div className="signup-feature-icon">
                <Radar size={25} />
              </div>

              <div>
                <h3>
                  Powerful Reconnaissance
                </h3>

                <p>
                  Discover assets, subdomains and
                  open ports with precision.
                </p>
              </div>

            </div>


            <div className="signup-feature-card">

              <div className="signup-feature-icon">
                <Zap size={25} />
              </div>

              <div>
                <h3>
                  Automated Scanning
                </h3>

                <p>
                  Automate your scans and save
                  hours of manual effort.
                </p>
              </div>

            </div>


            <div className="signup-feature-card">

              <div className="signup-feature-icon">
                <BarChart3 size={25} />
              </div>

              <div>
                <h3>
                  Actionable Insights
                </h3>

                <p>
                  Get advanced analytics and
                  prioritize real threats.
                </p>
              </div>

            </div>

          </div>


          {/* =====================================
              SECURITY CARD
          ===================================== */}

          <div className="signup-security-card">

            <div className="signup-security-left">

              <div className="signup-security-icon">
                <Lock size={22} />
              </div>

              <div>

                <h3>
                  Enterprise Grade Security
                </h3>

                <p>
                  Your data is protected with end-to-end
                  encryption and industry best practices.
                </p>

              </div>

            </div>


            <div className="signup-soc-card">

              <ShieldCheck size={27} />

              <div>
                <strong>SOC 2</strong>
                <small>COMPLIANT</small>
              </div>

            </div>

          </div>

        </section>


        {/* =======================================
            RIGHT SIDE — SIGNUP FORM
        ======================================= */}

        <section className="signup-form-panel">

          <div className="signup-form-inner">

            {/* FORM HEADING */}

            <div className="signup-form-heading">

              <div className="signup-user-icon">
                <UserPlus size={31} />
              </div>

              <div>

                <h2>
                  Create Your Account
                </h2>

                <p>
                  Join ReconIX and supercharge your
                  security operations.
                </p>

              </div>

            </div>


            <form onSubmit={handleSubmit}>

              {/* =================================
                  FULL NAME + USERNAME
              ================================= */}

              <div className="signup-two-column">

                <div className="signup-field">

                  <label>
                    Full Name
                  </label>

                  <div className="signup-input-wrapper">

                    <User
                      className="signup-input-icon"
                      size={21}
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />

                  </div>

                </div>


                <div className="signup-field">

                  <label>
                    Username
                  </label>

                  <div className="signup-input-wrapper">

                    <AtSign
                      className="signup-input-icon"
                      size={21}
                    />

                    <input
                      type="text"
                      placeholder="Choose a username"
                      required
                    />

                  </div>

                </div>

              </div>


              {/* =================================
                  EMAIL
              ================================= */}

              <div className="signup-field">

                <label>
                  Email Address
                </label>

                <div className="signup-input-wrapper">

                  <Mail
                    className="signup-input-icon"
                    size={21}
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>


              {/* =================================
                  PASSWORD + CONFIRM
              ================================= */}

              <div className="signup-two-column">

                <div className="signup-field">

                  <label>
                    Password
                  </label>

                  <div className="signup-input-wrapper">

                    <Lock
                      className="signup-input-icon"
                      size={21}
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Create a strong password"
                      required
                    />

                    <button
                      type="button"
                      className="signup-eye-btn"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>

                  </div>

                </div>


                <div className="signup-field">

                  <label>
                    Confirm Password
                  </label>

                  <div className="signup-input-wrapper">

                    <Lock
                      className="signup-input-icon"
                      size={21}
                    />

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm your password"
                      required
                    />

                    <button
                      type="button"
                      className="signup-eye-btn"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      aria-label="Toggle confirm password visibility"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>

                  </div>

                </div>

              </div>


              {/* =================================
                  PASSWORD REQUIREMENTS
              ================================= */}

              <div className="signup-password-box">

                <h3>
                  Password must contain:
                </h3>

                <div className="signup-password-rules">

                  <span>✓ At least 8 characters</span>
                  <span>✓ One number</span>

                  <span>✓ One uppercase letter</span>
                  <span>✓ One special character</span>

                  <span>✓ One lowercase letter</span>

                </div>

              </div>


              {/* =================================
                  TERMS
              ================================= */}

              <label className="signup-terms">

                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) =>
                    setAgreeTerms(e.target.checked)
                  }
                />

                <span className="signup-custom-checkbox">
                  {agreeTerms ? "✓" : ""}
                </span>

                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    className="signup-link"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="signup-link"
                  >
                    Privacy Policy
                  </button>
                </span>

              </label>


              {/* =================================
                  CREATE ACCOUNT BUTTON
              ================================= */}

              <button
                type="submit"
                className="signup-submit"
              >

                <ShieldCheck size={22} />

                <span>
                  Create Account
                </span>

              </button>

            </form>


            {/* =================================
                DIVIDER
            ================================= */}

            <div className="signup-divider">

              <span></span>

              <strong>OR</strong>

              <span></span>

            </div>


            {/* =================================
                GOOGLE
            ================================= */}

        <button
          type="button"
          className="signup-google"
        >
          <svg
            className="signup-google-icon"
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

             Sign up with Google
           </button>
             

            {/* =================================
                SECURITY MESSAGE
            ================================= */}

            <div className="signup-secure-message">

              <Lock size={18} />

              <span>
                Your information is secure and encrypted
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}