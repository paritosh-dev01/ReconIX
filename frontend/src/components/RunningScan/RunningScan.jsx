import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./RunningScan.css";

export default function RunningScan() {
  const navigate = useNavigate();
  const location = useLocation();
  const scanConfig = location.state?.scanConfig || {};

  const [progress, setProgress] = useState(58);
  const [activeTab, setActiveTab] = useState("logs");
  
  const [logs] = useState([
    "[02:14:02] INITIALIZING ReconIX Core Engine v4.2...",
    "[02:14:05] Target resolve successful: app.reconix.com [IP: 104.21.90.12]",
    "[02:14:10] Initiating SYN stealth port scan across 1000 top ports...",
    "[02:14:18] Subdomain brute-forcing active (Wordlist: SecLists-Top100k)...",
    "[02:14:25] Discovered 14 active production subdomains & endpoints",
    "[02:14:32] Analyzing SSL/TLS cipher suites and certificate chains...",
    "[02:14:40] Injecting fuzzing vectors for OWASP Top 10 vulnerabilities...",
    "[02:14:48] Analyzing HTTP response headers and security policies...",
  ]);

  const [subdomains] = useState([
    { name: "api.reconix.com", status: "Active (200 OK)", ip: "104.21.90.13" },
    { name: "admin.reconix.com", status: "Protected (401)", ip: "104.21.90.18" },
    { name: "staging.reconix.com", status: "Active (200 OK)", ip: "104.21.90.22" },
    { name: "git.reconix.com", status: "Exposed Header", ip: "104.21.90.35" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 99 ? prev + 1 : prev));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const handleCancelScan = () => {
    if (window.confirm("Abort active security scan?")) {
      navigate("/scans");
    }
  };

  return (
    <div className="runningscan-page">
      {/* HEADER SECTION */}
      <div className="runningscan-header">
        <div className="header-left">
          <div className="badge-row">
            <span className="runningscan-badge animate-pulse">● LIVE THREAT SCAN</span>
            <span className="scan-mode-tag">{scanConfig.scanProfile || "Full Security Scan"}</span>
          </div>
          <h1>{scanConfig.scanName || "Website Security Scan - Prod"}</h1>
          <p>Target Node: <span>{scanConfig.targets?.[0]?.value || "app.reconix.com"}</span></p>
        </div>
        <div className="header-actions">
          <button className="cancel-scan-btn" onClick={handleCancelScan}>
            Abort Scan
          </button>
        </div>
      </div>

      {/* METRICS & PROGRESS HERO CARD */}
      <div className="runningscan-progress-card cyber-grid-bg">
        <div className="radar-glow-effect" />
        <div className="progress-info-top">
          <div>
            <span className="progress-label">SCAN ENGINE STATUS</span>
            <h2>{progress}% <small>Completed</small></h2>
          </div>
          <div className="status-live-container">
            <span className="live-radar-ping" />
            <span className="status-text">DEEP INSPECTION ACTIVE</span>
          </div>
        </div>

        <div className="main-progress-bar">
          <div className="main-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="progress-stats-grid">
          <div className="stat-item">
            <span>Scan Protocol</span>
            <strong>{scanConfig.scanType || "Web Application"}</strong>
          </div>
          <div className="stat-item">
            <span>Packets Dispatched</span>
            <strong>48,210 req/s</strong>
          </div>
          <div className="stat-item">
            <span>Elapsed Time</span>
            <strong>00:12:45</strong>
          </div>
          <div className="stat-item">
            <span>Estimated Remaining</span>
            <strong>~00:08:15</strong>
          </div>
        </div>
      </div>

      {/* DYNAMIC TABBED WORKSPACE */}
      <div className="runningscan-workspace">
        
        {/* LEFT COLUMN: CONSOLE / DATA TABS */}
        <div className="runningscan-card main-console-card">
          <div className="console-tabs-header">
            <button 
              className={`tab-btn ${activeTab === "logs" ? "active" : ""}`} 
              onClick={() => setActiveTab("logs")}
            >
              ⚡ Live Console Logs
            </button>
            <button 
              className={`tab-btn ${activeTab === "subdomains" ? "active" : ""}`} 
              onClick={() => setActiveTab("subdomains")}
            >
              🌐 Discovered Subdomains ({subdomains.length})
            </button>
          </div>

          {activeTab === "logs" ? (
            <div className="console-terminal">
              {logs.map((log, index) => (
                <div key={index} className="terminal-line">
                  <span className="t-timestamp">{log.substring(0, 10)}</span>
                  <span className="t-msg">{log.substring(10)}</span>
                </div>
              ))}
              <div className="terminal-line pulsing-cursor">
                [02:15:02] Analyzing database payload responses... █
              </div>
            </div>
          ) : (
            <div className="subdomains-table-view">
              <div className="sub-header-row">
                <span>Subdomain URL</span>
                <span>Security Status</span>
                <span>Resolved IP</span>
              </div>
              {subdomains.map((sub, idx) => (
                <div className="sub-data-row" key={idx}>
                  <strong className="sub-link">{sub.name}</strong>
                  <span className="sub-status-badge">{sub.status}</span>
                  <span className="sub-ip">{sub.ip}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: LIVE VULNERABILITIES FEED */}
        <div className="runningscan-card findings-card">
          <div className="card-header">
            <h3>Live Vulnerabilities</h3>
            <span className="vuln-counter-badge">12 Detected</span>
          </div>

          <div className="findings-list">
            <div className="finding-item critical">
              <div className="sev-header">
                <span className="sev-badge critical">CRITICAL</span>
                <span className="vuln-cve">CVE-2024-3811</span>
              </div>
              <strong>SQL Injection in /api/v1/auth</strong>
              <p>Unsanitized input parameter allows remote DB interrogation.</p>
            </div>

            <div className="finding-item high">
              <div className="sev-header">
                <span className="sev-badge high">HIGH</span>
                <span className="vuln-cve">CORS-01</span>
              </div>
              <strong>Wildcard CORS Misconfiguration</strong>
              <p>Access-Control-Allow-Origin reflects unauthorized domains.</p>
            </div>

            <div className="finding-item medium">
              <div className="sev-header">
                <span className="sev-badge medium">MEDIUM</span>
                <span className="vuln-cve">TLS-99</span>
              </div>
              <strong>Deprecated Cipher Suite Enabled</strong>
              <p>Server accepts weak TLS 1.0/1.1 handshakes on port 443.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}