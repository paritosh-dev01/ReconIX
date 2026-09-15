import React, { useState } from "react";
import "./Scans.css";
import ReconIXLogo from "../../assets/logo/ReconIXLogo.png";

const Scans = () => {
  // =========================================
  // STATE MANAGEMENT
  // =========================================
  const [showNewScan, setShowNewScan] = useState(false);
  const [selectedScan, setSelectedScan] = useState(null);

  // FORM STATE
  const [scanName, setScanName] = useState("");
  const [target, setTarget] = useState("");
  const [scanType, setScanType] = useState("Web Application");

  // INITIAL SCANS DATA
  const [scans, setScans] = useState([
    {
      id: 1,
      name: "Web Application Scan",
      target: "app.reconix.com",
      progress: 72,
      status: "Running",
      time: "12 min remaining",
      type: "Web Application",
      started: "Today, 02:14 PM",
      findings: 18,
    },
    {
      id: 2,
      name: "Network Infrastructure Scan",
      target: "192.168.1.0/24",
      progress: 48,
      status: "Running",
      time: "24 min remaining",
      type: "Network",
      started: "Today, 02:02 PM",
      findings: 9,
    },
    {
      id: 3,
      name: "API Security Scan",
      target: "api.reconix.com",
      progress: 86,
      status: "Running",
      time: "6 min remaining",
      type: "API Security",
      started: "Today, 02:21 PM",
      findings: 24,
    },
    {
      id: 4,
      name: "External Attack Surface",
      target: "reconix.com",
      progress: 100,
      status: "Completed",
      time: "Completed 18 min ago",
      type: "Attack Surface",
      started: "Today, 01:36 PM",
      findings: 31,
    },
    {
      id: 5,
      name: "Cloud Configuration Scan",
      target: "AWS Production",
      progress: 100,
      status: "Failed",
      time: "Failed 42 min ago",
      type: "Cloud Security",
      started: "Today, 01:12 PM",
      findings: 7,
    },
  ]);

  // =========================================
  // HANDLERS
  // =========================================
  const handleStartScan = () => {
    if (!scanName.trim() || !target.trim()) {
      alert("Please enter Scan Name and Target.");
      return;
    }

    const newScan = {
      id: Date.now(),
      name: scanName.trim(),
      target: target.trim(),
      progress: 0,
      status: "Running",
      time: "Starting...",
      type: scanType,
      started: "Just now",
      findings: 0,
    };

    setScans((prevScans) => [newScan, ...prevScans]);
    setSelectedScan(newScan);
    setShowNewScan(false);

    // Reset Form
    setScanName("");
    setTarget("");
    setScanType("Web Application");
  };

  const handleOpenNewScan = () => {
    setShowNewScan(true);
  };

  return (
    <div className="scans-page">
      {/* =========================================
          HEADER
      ========================================= */}
      <div className="scans-header">
        <div>
          <h1>Security Scans</h1>
          <p>Monitor and manage real-time reconnaissance and vulnerability scans</p>
        </div>

        <button className="scans-new-btn" onClick={handleOpenNewScan}>
          + New Scan
        </button>
      </div>

      {/* =========================================
          STATS CARDS
      ========================================= */}
      <div className="scans-stats">
        <div className="scans-stat-card">
          <span>Total Scans</span>
          <strong>{384 + Math.max(0, scans.length - 5)}</strong>
        </div>

        <div className="scans-stat-card">
          <span>Running</span>
          <strong>
            {scans.filter((scan) => scan.status === "Running").length}
          </strong>
        </div>

        <div className="scans-stat-card">
          <span>Completed</span>
          <strong>368</strong>
        </div>

        <div className="scans-stat-card">
          <span>Failed</span>
          <strong>13</strong>
        </div>
      </div>

      {/* =========================================
          SCANS WORKSPACE
      ========================================= */}
      <div className="scans-workspace">
        {/* LIST PANEL */}
        <div className="scans-panel">
          <div className="scans-panel-header">
            <div>
              <h2>Recent Scans</h2>
              <p>Latest security scan activities</p>
            </div>

            <button className="scans-filter-btn">Filter</button>
          </div>

          <div className="scans-list">
            {scans.map((scan) => (
              <div
                key={scan.id}
                className={`scan-row ${
                  selectedScan?.id === scan.id ? "selected" : ""
                }`}
                onClick={() => setSelectedScan(scan)}
              >
                <div className="scan-icon">◉</div>

                <div className="scan-info">
                  <h3>{scan.name}</h3>
                  <p>Target: {scan.target}</p>
                </div>

                <div className="scan-progress-section">
                  <div className="scan-progress-top">
                    <span>Progress</span>
                    <strong>{scan.progress}%</strong>
                  </div>
                  <div className="scan-progress-bar">
                    <div
                      className="scan-progress-fill"
                      style={{ width: `${scan.progress}%` }}
                    />
                  </div>
                </div>

                <div className={`scan-status ${scan.status.toLowerCase()}`}>
                  {scan.status}
                </div>

                <div className="scan-time">{scan.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS PANEL */}
        <div className="scan-details-panel">
          {selectedScan ? (
            <>
              <div className="scan-details-header">
                <div>
                  <span className="scan-details-label">SCAN DETAILS</span>
                  <h2>{selectedScan.name}</h2>
                </div>

                <div className={`scan-status ${selectedScan.status.toLowerCase()}`}>
                  {selectedScan.status}
                </div>
              </div>

              <div className="scan-details-target">
                <span>Target</span>
                <strong>{selectedScan.target}</strong>
              </div>

              <div className="scan-details-progress">
                <div className="scan-details-progress-top">
                  <span>Scan Progress</span>
                  <strong>{selectedScan.progress}%</strong>
                </div>
                <div className="scan-progress-bar">
                  <div
                    className="scan-progress-fill"
                    style={{ width: `${selectedScan.progress}%` }}
                  />
                </div>
              </div>

              <div className="scan-details-grid">
                <div>
                  <span>Scan Type</span>
                  <strong>{selectedScan.type}</strong>
                </div>

                <div>
                  <span>Started</span>
                  <strong>{selectedScan.started}</strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>{selectedScan.time}</strong>
                </div>

                <div>
                  <span>Findings</span>
                  <strong>{selectedScan.findings}</strong>
                </div>
              </div>

              {selectedScan.status === "Running" && (
                <button className="scan-cancel-btn">Cancel Scan</button>
              )}
            </>
          ) : (
            <div className="scan-details-empty">
              <div className="scan-details-empty-icon">◉</div>
              <h3>No scan selected</h3>
              <p>Select a scan from the list to view its details.</p>
            </div>
          )}
        </div>
      </div>

      {/* =========================================
          NEW SCAN MODAL
      ========================================= */}
      {showNewScan && (
        <div className="new-scan-overlay" onClick={() => setShowNewScan(false)}>
          <div className="new-scan-modal" onClick={(e) => e.stopPropagation()}>
            <div className="new-scan-modal-header">
              <div>
                <span className="new-scan-label">SECURITY SCANNER</span>
                <h2>Start New Scan</h2>
                <p>Configure a new security scan for your target.</p>
              </div>

              <button
                className="new-scan-close"
                onClick={() => setShowNewScan(false)}
              >
                ×
              </button>
            </div>

            <div className="new-scan-field">
              <label>Scan Name</label>
              <input
                type="text"
                value={scanName}
                onChange={(e) => setScanName(e.target.value)}
                placeholder="e.g. Production Web Scan"
              />
            </div>

            <div className="new-scan-field">
              <label>Target</label>
              <input
                type="text"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="e.g. app.reconix.com"
              />
            </div>

            <div className="new-scan-field">
              <label>Scan Type</label>
              <select
                value={scanType}
                onChange={(e) => setScanType(e.target.value)}
              >
                <option>Web Application</option>
                <option>Network</option>
                <option>API Security</option>
                <option>Cloud Security</option>
                <option>Attack Surface</option>
              </select>
            </div>

            <div className="new-scan-config">
              <div>
                <span>Scan Mode</span>
                <strong>Standard</strong>
              </div>

              <div>
                <span>Priority</span>
                <strong>Normal</strong>
              </div>
            </div>

            <div className="new-scan-actions">
              <button
                className="new-scan-cancel"
                onClick={() => setShowNewScan(false)}
              >
                Cancel
              </button>

              <button className="new-scan-start" onClick={handleStartScan}>
                Start Scan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scans;