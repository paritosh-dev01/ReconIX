import { useState } from "react";
import "./Settings.css";

function Settings() {
  const [scanSpeed, setScanSpeed] = useState("Normal");
  const [concurrency, setConcurrency] = useState("10");
  const [timeout, setTimeoutValue] = useState("30");
  const [proxyEnabled, setProxyEnabled] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleSave = () => {
    window.alert("Settings saved successfully.");
  };

  const handleReset = () => {
    setScanSpeed("Normal");
    setConcurrency("10");
    setTimeoutValue("30");
    setProxyEnabled(false);
    setEmailNotifications(true);
  };

  return (
    <div className="settings-page">

      {/* PAGE HEADER */}
      <section className="settings-page-header">
        <div className="settings-title-wrap">
          <div className="settings-title-icon">⚙</div>

          <div>
            <h1>Settings</h1>
            <p>Configure your ReconIX platform and scanning preferences.</p>
          </div>
        </div>
      </section>

      {/* SETTINGS GRID */}
      <div className="settings-grid">

        {/* GENERAL */}
        <section className="settings-card">
          <div className="settings-card-header">
            <div className="settings-section-icon purple">◎</div>
            <div>
              <h2>General Preferences</h2>
              <p>Manage your personal ReconIX preferences.</p>
            </div>
          </div>

          <div className="settings-form">

            <div className="settings-field">
              <label>Theme</label>
              <select defaultValue="Dark">
                <option>Dark</option>
                <option>System</option>
                <option>Light</option>
              </select>
            </div>

            <div className="settings-field">
              <label>Language</label>
              <select defaultValue="English">
                <option>English</option>
              </select>
            </div>

            <div className="settings-field">
              <label>Time Zone</label>
              <select defaultValue="Asia/Kolkata">
                <option>Asia/Kolkata</option>
                <option>UTC</option>
              </select>
            </div>

            <div className="settings-toggle-row">
              <div>
                <strong>Email Notifications</strong>
                <span>Receive important scan and system updates.</span>
              </div>

              <button
                type="button"
                className={`settings-switch ${
                  emailNotifications ? "on" : ""
                }`}
                onClick={() =>
                  setEmailNotifications(!emailNotifications)
                }
              >
                <span />
              </button>
            </div>

          </div>
        </section>

        {/* SCAN CONFIGURATION */}
        <section className="settings-card">
          <div className="settings-card-header">
            <div className="settings-section-icon cyan">◈</div>
            <div>
              <h2>Scan Configuration</h2>
              <p>Control how reconnaissance scans operate.</p>
            </div>
          </div>

          <div className="settings-form">

            <div className="settings-field">
              <label>Scan Speed</label>
              <select
                value={scanSpeed}
                onChange={(e) => setScanSpeed(e.target.value)}
              >
                <option>Slow</option>
                <option>Normal</option>
                <option>Fast</option>
              </select>
            </div>

            <div className="settings-field">
              <label>Concurrency</label>
              <input
                type="number"
                value={concurrency}
                onChange={(e) => setConcurrency(e.target.value)}
                min="1"
              />
            </div>

            <div className="settings-field">
              <label>Request Timeout</label>
              <div className="settings-input-unit">
                <input
                  type="number"
                  value={timeout}
                  onChange={(e) => setTimeoutValue(e.target.value)}
                  min="1"
                />
                <span>seconds</span>
              </div>
            </div>

            <div className="settings-toggle-row">
              <div>
                <strong>Retry Failed Tasks</strong>
                <span>Automatically retry unsuccessful scan tasks.</span>
              </div>

              <button
                type="button"
                className="settings-switch on"
              >
                <span />
              </button>
            </div>

          </div>
        </section>

        {/* PROXY */}
        <section className="settings-card">
          <div className="settings-card-header">
            <div className="settings-section-icon blue">⇄</div>
            <div>
              <h2>Proxy Settings</h2>
              <p>Configure proxy routing for reconnaissance requests.</p>
            </div>
          </div>

          <div className="settings-form">

            <div className="settings-toggle-row">
              <div>
                <strong>Enable Proxy</strong>
                <span>Route supported requests through a proxy.</span>
              </div>

              <button
                type="button"
                className={`settings-switch ${
                  proxyEnabled ? "on" : ""
                }`}
                onClick={() => setProxyEnabled(!proxyEnabled)}
              >
                <span />
              </button>
            </div>

            <div className="settings-two-column">
              <div className="settings-field">
                <label>Proxy Host</label>
                <input
                  type="text"
                  placeholder="127.0.0.1"
                  disabled={!proxyEnabled}
                />
              </div>

              <div className="settings-field">
                <label>Proxy Port</label>
                <input
                  type="text"
                  placeholder="8080"
                  disabled={!proxyEnabled}
                />
              </div>
            </div>

            <button type="button" className="settings-outline-btn">
              Test Connection
            </button>

          </div>
        </section>

        {/* API KEYS */}
        <section className="settings-card">
          <div className="settings-card-header">
            <div className="settings-section-icon purple">⌘</div>
            <div>
              <h2>API Keys</h2>
              <p>Configure external intelligence service credentials.</p>
            </div>
          </div>

          <div className="settings-api-list">

            {[
              "SecurityTrails",
              "VirusTotal",
              "Shodan",
              "Censys",
              "IPinfo",
              "LLM / OpenAI"
            ].map((service) => (
              <div className="settings-api-row" key={service}>
                <div>
                  <strong>{service}</strong>
                  <span>API credential</span>
                </div>

                <input
                  type="password"
                  placeholder="••••••••••••••••"
                />

                <span className="settings-key-status">
                  Not configured
                </span>
              </div>
            ))}

          </div>
        </section>

        {/* WORDLISTS */}
        <section className="settings-card">
          <div className="settings-card-header">
            <div className="settings-section-icon cyan">▤</div>
            <div>
              <h2>Wordlists</h2>
              <p>Manage wordlists used during reconnaissance.</p>
            </div>
          </div>

          <div className="settings-wordlist-list">

            {[
              "Subdomain Wordlist",
              "Directory Wordlist",
              "Parameter Wordlist"
            ].map((item) => (
              <div className="settings-wordlist-row" key={item}>
                <div>
                  <strong>{item}</strong>
                  <span>Default wordlist</span>
                </div>

                <button type="button" className="settings-small-btn">
                  Select
                </button>
              </div>
            ))}

          </div>
        </section>

      </div>

      {/* FOOTER ACTIONS */}
      <div className="settings-actions">
        <button
          type="button"
          className="settings-reset-btn"
          onClick={handleReset}
        >
          Reset to Default
        </button>

        <button
          type="button"
          className="settings-save-btn"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>

    </div>
  );
}

export default Settings;