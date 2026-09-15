import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="profile-page">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="profile-page-header">
        <div className="profile-title-wrap">

          <div className="profile-title-icon">
            👤
          </div>

          <div>
            <h1>Profile</h1>
            <p>Manage your personal information and account preferences</p>
          </div>

        </div>
      </div>


      {/* =====================================================
          PROFILE HERO
      ===================================================== */}

      <section className="profile-hero-card">

        <div className="profile-avatar-large">
          U
        </div>

        <div className="profile-hero-info">
          <div className="profile-name-row">
            <h2>User Name</h2>
            <span className="profile-active-badge">
              Active
            </span>
          </div>

          <p>Security Researcher</p>

          <div className="profile-meta">
            <span>✉ user@example.com</span>
            <span>◉ Member since 2026</span>
          </div>
        </div>

        <div className="profile-hero-actions">
          <button className="profile-outline-btn">
            Change Avatar
          </button>
        </div>

      </section>


      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <div className="profile-grid">

        {/* ===================================================
            PERSONAL INFORMATION
        =================================================== */}

        <section className="profile-card">

          <div className="profile-card-header">

            <div className="profile-section-icon purple">
              👤
            </div>

            <div>
              <h2>Personal Information</h2>
              <p>Update your basic account information</p>
            </div>

          </div>


          <div className="profile-form">

            <div className="profile-two-column">

              <div className="profile-field">
                <label>First Name</label>

                <input
                  type="text"
                  defaultValue="User"
                />
              </div>

              <div className="profile-field">
                <label>Last Name</label>

                <input
                  type="text"
                  defaultValue="Name"
                />
              </div>

            </div>


            <div className="profile-field">
              <label>Email Address</label>

              <input
                type="email"
                defaultValue="user@example.com"
              />
            </div>


            <div className="profile-field">
              <label>Role</label>

              <input
                type="text"
                defaultValue="Security Researcher"
                disabled
              />
            </div>


            <div className="profile-field">
              <label>Organization</label>

              <input
                type="text"
                defaultValue="ReconIX"
              />
            </div>


            <div className="profile-field">
              <label>Bio</label>

              <textarea
                defaultValue="Security enthusiast focused on reconnaissance and vulnerability discovery."
              />
            </div>

          </div>

        </section>


        {/* ===================================================
            ACCOUNT SECURITY
        =================================================== */}

        <section className="profile-card">

          <div className="profile-card-header">

            <div className="profile-section-icon cyan">
              🔐
            </div>

            <div>
              <h2>Account Security</h2>
              <p>Manage your password and security settings</p>
            </div>

          </div>


          <div className="profile-form">

            <div className="profile-field">
              <label>Current Password</label>

              <input
                type="password"
                placeholder="Enter current password"
              />
            </div>


            <div className="profile-field">
              <label>New Password</label>

              <div className="profile-password-input">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>


            <div className="profile-field">
              <label>Confirm New Password</label>

              <input
                type="password"
                placeholder="Confirm new password"
              />
            </div>


            <button className="profile-security-btn">
              Update Password
            </button>


            {/* TWO FACTOR */}

            <div className="profile-security-row">

              <div className="profile-security-icon">
                🛡
              </div>

              <div className="profile-security-text">
                <strong>Two-Factor Authentication</strong>
                <span>
                  Add an extra layer of security to your account
                </span>
              </div>

              <div className="profile-switch">
                <span></span>
              </div>

            </div>


            {/* LOGIN ALERTS */}

            <div className="profile-security-row">

              <div className="profile-security-icon blue">
                🔔
              </div>

              <div className="profile-security-text">
                <strong>Login Notifications</strong>
                <span>
                  Get notified when a new login is detected
                </span>
              </div>

              <div className="profile-switch on">
                <span></span>
              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            ACCOUNT ACTIVITY
        =================================================== */}

        <section className="profile-card">

          <div className="profile-card-header">

            <div className="profile-section-icon blue">
              ◷
            </div>

            <div>
              <h2>Account Activity</h2>
              <p>Recent activity on your ReconIX account</p>
            </div>

          </div>


          <div className="profile-activity-list">

            <div className="profile-activity-item">

              <div className="profile-activity-dot success">
                ✓
              </div>

              <div className="profile-activity-info">
                <strong>Successful login</strong>
                <span>Chrome · Windows</span>
              </div>

              <time>Just now</time>

            </div>


            <div className="profile-activity-item">

              <div className="profile-activity-dot purple">
                ⚙
              </div>

              <div className="profile-activity-info">
                <strong>Profile updated</strong>
                <span>Account information changed</span>
              </div>

              <time>2 hours ago</time>

            </div>


            <div className="profile-activity-item">

              <div className="profile-activity-dot cyan">
                ◉
              </div>

              <div className="profile-activity-info">
                <strong>Security scan completed</strong>
                <span>ReconIX Scanner</span>
              </div>

              <time>Yesterday</time>

            </div>


            <div className="profile-activity-item">

              <div className="profile-activity-dot warning">
                !
              </div>

              <div className="profile-activity-info">
                <strong>API key accessed</strong>
                <span>Security Scanner</span>
              </div>

              <time>2 days ago</time>

            </div>

          </div>

        </section>


        {/* ===================================================
            DANGER ZONE
        =================================================== */}

        <section className="profile-card profile-danger-card">

          <div className="profile-card-header">

            <div className="profile-section-icon danger">
              ⚠
            </div>

            <div>
              <h2>Danger Zone</h2>
              <p>Irreversible account actions</p>
            </div>

          </div>


          <div className="profile-danger-content">

            <div>
              <strong>Sign out from all devices</strong>

              <span>
                This will end all active sessions associated with your account.
              </span>
            </div>

            <button className="profile-danger-btn">
              Sign Out All
            </button>

          </div>


          <div className="profile-danger-content delete">

            <div>
              <strong>Delete Account</strong>

              <span>
                Permanently remove your account and associated data.
              </span>
            </div>

            <button className="profile-delete-btn">
              Delete Account
            </button>

          </div>

        </section>

      </div>


      {/* =====================================================
          FOOTER ACTIONS
      ===================================================== */}

      <div className="profile-actions">

        <button className="profile-reset-btn">
          Cancel
        </button>

        <button
          className="profile-save-btn"
          onClick={handleSave}
        >
          {saved ? "✓ Changes Saved" : "Save Changes"}
        </button>

      </div>

    </div>
  );
}

export default Profile;