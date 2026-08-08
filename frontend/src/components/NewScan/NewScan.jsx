import reconixLogo from "../../assets/logo/ReconIXLogo.png";
import { useState } from "react";
import "./NewScan.css";

export default function NewScan() {
  const [scanName, setScanName] = useState("Website Security Scan - Prod");
  const [description, setDescription] = useState("");
  const [targetInput, setTargetInput] = useState("");

  const [scanType, setScanType] = useState("Website Scan");
  const [scanProfile, setScanProfile] = useState("Full Security Scan");

  const [targets, setTargets] = useState([
    {
      value: "https://example.com",
      type: "Website",
      icon: "◉",
    },
    {
      value: "192.168.1.0/24",
      type: "Network",
      icon: "⌘",
    },
  ]);

  const [advanced, setAdvanced] = useState({
    crawling: true,
    vulnerability: true,
    ports: true,
    subdomains: true,
  });

  const [scheduleEnabled, setScheduleEnabled] = useState(false);

  const toggleAdvanced = (name) => {
    setAdvanced((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const addTarget = () => {
    const value = targetInput.trim();

    if (!value) return;

    const isNetwork =
      value.includes("/") ||
      /^\d{1,3}(\.\d{1,3}){3}$/.test(value);

    setTargets((prev) => [
      ...prev,
      {
        value,
        type: isNetwork ? "Network" : "Website",
        icon: isNetwork ? "⌘" : "◉",
      },
    ]);

    setTargetInput("");
  };

  const removeTarget = (index) => {
    setTargets((prev) => prev.filter((_, i) => i !== index));
  };

  const clearTargets = () => {
    setTargets([]);
  };

  const handleStartScan = () => {
    if (!scanName.trim()) {
      alert("Please enter a scan name.");
      return;
    }

    if (targets.length === 0) {
      alert("Please add at least one target.");
      return;
    }

    console.log("ReconIX New Scan:", {
      scanName,
      description,
      scanType,
      scanProfile,
      targets,
      advanced,
      scheduleEnabled,
    });

    alert("Scan configuration saved.");
  };

  return (
    <div className="newscan-page">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="newscan-sidebar">

        <div className="newscan-brand">

          <img
            src={reconixLogo}
            alt="ReconIX"
            className="newscan-brand-logo"
          />

          <span className="newscan-brand-name">
            ReconIX
          </span>
  
        </div>


        <nav className="newscan-nav">

          <a href="/" className="newscan-nav-item">
            <span>⌂</span>
            Dashboard
          </a>

          <a href="/" className="newscan-nav-item">
            <span>▣</span>
            Assets
          </a>

          <a href="/" className="newscan-nav-item active">
            <span>◉</span>
            Scans
          </a>

          <a href="/" className="newscan-nav-item">
            <span>♢</span>
            Vulnerabilities
          </a>

          <a href="/" className="newscan-nav-item">
            <span>◉</span>
            Threat Intelligence
          </a>

          <a href="/" className="newscan-nav-item">
            <span>▤</span>
            Reports
          </a>

          <a href="/" className="newscan-nav-item">
            <span>▣</span>
            Automation
          </a>

          <a href="/" className="newscan-nav-item">
            <span>✧</span>
            Integrations
          </a>

          <a href="/" className="newscan-nav-item">
            <span>⚙</span>
            Settings
          </a>

        </nav>


        {/* ENTERPRISE */}

        <div className="newscan-enterprise">

          <div className="enterprise-icon">
            ♛
          </div>

          <strong>
            Enterprise Plan
          </strong>

          <p>
            Unlock advanced features
            and unlimited scans.
          </p>

          <button>
            Upgrade Now
          </button>

        </div>


        {/* SYSTEM STATUS */}

        <div className="newscan-system">

          <div className="system-title">
            System Status
            <span>→</span>
          </div>

          <div className="system-status">
            <span className="system-check">
              ✓
            </span>

            <div>
              <strong>
                All Systems Secure
              </strong>

              <p>
                Everything is running smoothly.
              </p>
            </div>
          </div>

        </div>


        <div className="newscan-collapse">
          ‹‹
          <span>Collapse</span>
        </div>

      </aside>


      {/* =====================================================
          MAIN AREA
      ===================================================== */}

      <main className="newscan-main">

        {/* TOP BAR */}

        <header className="newscan-topbar">

          <div className="newscan-breadcrumb">

            <span>Dashboard</span>

            <b>›</b>

            <span>Scans</span>

            <b>›</b>

            <strong>New Scan</strong>

          </div>


          <div className="newscan-search">

            <span>
              ⌕
            </span>

            <input
              placeholder="Search assets, scans, vulnerabilities..."
            />

            <kbd>
              ⌘ K
            </kbd>

          </div>


          <div className="newscan-top-actions">

            <button>
              ♧
              <i>5</i>
            </button>

            <button>
              ?
            </button>

            <button>
              ◐
            </button>

            <div className="newscan-user">

              <div className="user-avatar">
                A
              </div>

              <div>
                <strong>Admin</strong>
                <small>Administrator</small>
              </div>

              <span>⌄</span>

            </div>

          </div>

        </header>


        {/* PAGE HEADER */}

        <section className="newscan-page-header">

          <div className="newscan-title-area">

            <div className="newscan-title-icon">
              ◉
            </div>

            <div>

              <h1>
                New Scan
              </h1>

              <p>
                Configure and launch a new security scan
              </p>

            </div>

          </div>


          <div className="newscan-header-actions">

            <button className="template-btn">
              ▦
              Scan Templates
            </button>

            <button
              className="start-header-btn"
              onClick={handleStartScan}
            >
              ▷
              Start Scan
            </button>

          </div>

        </section>


        {/* =====================================================
            WORKSPACE
        ===================================================== */}

        <div className="newscan-workspace">


          {/* ===================================================
              LEFT COLUMN
          =================================================== */}

          <div className="newscan-left">


            {/* SCAN CONFIGURATION */}

            <section className="newscan-card">

              <div className="section-heading">

                <span className="section-number">
                  1
                </span>

                <h2>
                  Scan Configuration
                </h2>

              </div>


              <label>
                Scan Name <em>*</em>
              </label>

              <div className="input-with-icon">

                <span>
                  ▣
                </span>

                <input
                  value={scanName}
                  onChange={(e) =>
                    setScanName(e.target.value)
                  }
                />

              </div>


              <label>
                Description <small>(Optional)</small>
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Enter scan description..."
                maxLength={300}
              />

              <div className="character-count">
                {description.length} / 300
              </div>

            </section>


            {/* SCAN TYPE */}

            <section className="newscan-card">

              <div className="section-heading">

                <span className="section-number">
                  2
                </span>

                <h2>
                  Scan Type
                </h2>

              </div>


              <div className="scan-type-grid">

                {[
                  {
                    name: "Website Scan",
                    icon: "◉",
                    description:
                      "Scan websites and web applications",
                  },
                  {
                    name: "Network Scan",
                    icon: "⌘",
                    description:
                      "Scan IP ranges and network infrastructure",
                  },
                  {
                    name: "API Scan",
                    icon: "API",
                    description:
                      "Scan REST/SOAP APIs for vulnerabilities",
                  },
                  {
                    name: "Cloud Scan",
                    icon: "☁",
                    description:
                      "Scan cloud assets and configurations",
                  },
                ].map((item) => (

                  <button
                    key={item.name}
                    className={
                      scanType === item.name
                        ? "scan-type selected"
                        : "scan-type"
                    }
                    onClick={() =>
                      setScanType(item.name)
                    }
                  >

                    <span className="scan-type-icon">
                      {item.icon}
                    </span>

                    <strong>
                      {item.name}
                    </strong>

                    <small>
                      {item.description}
                    </small>

                    {scanType === item.name && (
                      <b className="selected-check">
                        ✓
                      </b>
                    )}

                  </button>

                ))}

              </div>

            </section>


            {/* PROFILE */}

            <section className="newscan-card">

              <div className="section-heading">

                <span className="section-number">
                  3
                </span>

                <h2>
                  Select Scan Profile
                </h2>

              </div>


              <select
                className="profile-select"
                value={scanProfile}
                onChange={(e) =>
                  setScanProfile(e.target.value)
                }
              >

                <option>
                  Full Security Scan
                </option>

                <option>
                  Quick Scan
                </option>

                <option>
                  Website Scan
                </option>

                <option>
                  Cloud Scan
                </option>

              </select>


              <p className="profile-description">
                Comprehensive scan including OWASP Top 10,
                misconfigurations, and known vulnerabilities.
              </p>

            </section>


            {/* ADVANCED SETTINGS */}

            <section className="newscan-card">

              <div className="section-heading">

                <span className="section-number">
                  4
                </span>

                <h2>
                  Advanced Settings
                </h2>

              </div>


              <div className="advanced-grid">

                {[
                  {
                    key: "crawling",
                    title: "Crawling",
                    icon: "◎",
                  },
                  {
                    key: "vulnerability",
                    title: "Vulnerability Detection",
                    icon: "♢",
                  },
                  {
                    key: "ports",
                    title: "Port Scanning",
                    icon: "▣",
                  },
                  {
                    key: "subdomains",
                    title: "Subdomain Discovery",
                    icon: "⌕",
                  },
                ].map((item) => (

                  <button
                    key={item.key}
                    className="advanced-item"
                    onClick={() =>
                      toggleAdvanced(item.key)
                    }
                  >

                    <span className="advanced-icon">
                      {item.icon}
                    </span>

                    <div>

                      <strong>
                        {item.title}
                      </strong>

                      <small>
                        {advanced[item.key]
                          ? "Enabled"
                          : "Disabled"}
                      </small>

                    </div>

                    <span
                      className={
                        advanced[item.key]
                          ? "toggle on"
                          : "toggle"
                      }
                    >
                      <i />
                    </span>

                  </button>

                ))}

              </div>


              <button className="more-settings">
                More Settings
                <span>›</span>
              </button>

            </section>

          </div>


          {/* ===================================================
              RIGHT COLUMN
          =================================================== */}

          <div className="newscan-right">


            {/* TARGET CONFIGURATION */}

            <section className="newscan-card target-card">

              <div className="section-heading">

                <span className="section-number">
                  5
                </span>

                <h2>
                  Target Configuration
                </h2>

              </div>


              <label>
                Target Input
              </label>

              <div className="target-input">

                <span>
                  ◉
                </span>

                <input
                  value={targetInput}
                  onChange={(e) =>
                    setTargetInput(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addTarget();
                    }
                  }}
                  placeholder="Enter URL, domain, IP address or network range"
                />

                <button onClick={addTarget}>
                  +
                </button>

              </div>


              <div className="examples">

                <span>Examples:</span>

                <button
                  onClick={() =>
                    setTargetInput("https://example.com")
                  }
                >
                  https://example.com
                </button>

                <button
                  onClick={() =>
                    setTargetInput("192.168.1.0/24")
                  }
                >
                  192.168.1.0/24
                </button>

                <button
                  onClick={() =>
                    setTargetInput("10.0.0.0/16")
                  }
                >
                  10.0.0.0/16
                </button>

                <button
                  onClick={() =>
                    setTargetInput("example.com")
                  }
                >
                  example.com
                </button>

              </div>


              <div className="target-list-header">

                <strong>
                  Target List ({targets.length})
                </strong>

                <button onClick={clearTargets}>
                  Clear All
                  <span>♜</span>
                </button>

              </div>


              <div className="target-list">

                {targets.map((targetItem, index) => (

                  <div
                    className="target-row"
                    key={`${targetItem.value}-${index}`}
                  >

                    <span className="target-row-icon">
                      {targetItem.icon}
                    </span>

                    <strong>
                      {targetItem.value}
                    </strong>

                    <span className="target-type">
                      {targetItem.type}
                    </span>

                    <button
                      onClick={() =>
                        removeTarget(index)
                      }
                    >
                      ×
                    </button>

                  </div>

                ))}

                {targets.length === 0 && (

                  <div className="empty-targets">
                    No targets added yet.
                  </div>

                )}

              </div>

            </section>


            {/* LOWER RIGHT INFORMATION */}

            <div className="newscan-info-grid">


              {/* ESTIMATED TIME */}

              <section className="newscan-card estimate-card">

                <div className="mini-card-title">
                  <span>◷</span>
                  Estimated Scan Time
                </div>


                <div className="estimate-row header">
                  <span>Scan Type</span>
                  <span>Est. Time</span>
                </div>

                <div className="estimate-row">
                  <span>
                    <i className="green-dot" />
                    Quick Scan
                  </span>

                  <strong>
                    2 – 5 min
                  </strong>
                </div>

                <div className="estimate-row selected-estimate">
                  <span>
                    <i className="blue-dot" />
                    Website Scan
                  </span>

                  <strong>
                    10 – 20 min
                  </strong>
                </div>

                <div className="estimate-row">
                  <span>
                    <i className="purple-dot" />
                    Full Security Scan
                  </span>

                  <strong>
                    30 – 90 min
                  </strong>
                </div>

                <div className="estimate-row">
                  <span>
                    <i className="orange-dot" />
                    Cloud Scan
                  </span>

                  <strong>
                    Depends on assets
                  </strong>
                </div>


                <p className="estimate-note">
                  ⓘ Time may vary based on target size
                  and network conditions.
                </p>

              </section>


              {/* COMPLEXITY */}

              <section className="newscan-card complexity-card">

                <div className="mini-card-title">
                  <span>▥</span>
                  Scan Complexity
                </div>


                <div className="complexity-gauge">

                  <div className="gauge-arc" />

                  <div className="gauge-needle" />

                  <strong>
                    Medium
                  </strong>

                </div>


                <p>
                  This scan may take moderate time and
                  consume average resources.
                </p>

              </section>


              {/* BEFORE STARTING */}

              <section className="newscan-card checklist-card">

                <div className="mini-card-title">
                  <span>♢</span>
                  Before Starting
                </div>


                <ul>

                  <li>
                    <span>✓</span>
                    Verify target ownership
                    and authorization.
                  </li>

                  <li>
                    <span>✓</span>
                    Ensure you have permission
                    to scan the targets.
                  </li>

                  <li>
                    <span>✓</span>
                    Full scans consume more
                    time and resources.
                  </li>

                  <li>
                    <span>✓</span>
                    Reports will be generated
                    automatically after scan.
                  </li>

                </ul>


                <div className="documentation">
                  ▣ Need help?
                  <span>View Documentation</span>
                </div>

              </section>

            </div>


            {/* SCHEDULE */}

            <section className="newscan-card schedule-card">

              <div className="section-heading">

                <span className="section-number">
                  6
                </span>

                <h2>
                  Schedule
                  <small>(Optional)</small>
                </h2>

              </div>


              <div className="schedule-content">

                <div className="schedule-toggle-wrap">

                  <span
                    className={
                      scheduleEnabled
                        ? "toggle on"
                        : "toggle"
                    }
                    onClick={() =>
                      setScheduleEnabled(
                        !scheduleEnabled
                      )
                    }
                  >
                    <i />
                  </span>

                  <div>
                    <strong>
                      Schedule this scan to run automatically.
                    </strong>
                  </div>

                </div>


                <div className="schedule-field">

                  <label>Date</label>

                  <input
                    type="text"
                    defaultValue="May 17, 2026"
                    disabled={!scheduleEnabled}
                  />

                </div>


                <div className="schedule-field">

                  <label>Time</label>

                  <input
                    type="text"
                    defaultValue="12:00 AM"
                    disabled={!scheduleEnabled}
                  />

                </div>


                <div className="schedule-field">

                  <label>Repeat</label>

                  <select disabled={!scheduleEnabled}>
                    <option>One Time</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>

                </div>

              </div>

            </section>


            {/* SECURE SCANNING */}

            <section className="secure-scanning">

              <div className="secure-icon">
                ♢
              </div>

              <div>

                <h3>
                  Secure Scanning
                </h3>

                <p>
                  All scans are performed securely and ethically.
                  No exploitation is performed.
                </p>

              </div>

              <span>
                100% Safe
              </span>

            </section>

          </div>

        </div>


        {/* FOOTER */}

        <div className="newscan-footer">

          <span>
            ♧
          </span>

          All scans are performed securely and ethically.
          Please ensure you have proper authorization to scan
          the target systems.

          <strong>
            ● All Systems Secure
          </strong>

        </div>

      </main>

    </div>
  );
}