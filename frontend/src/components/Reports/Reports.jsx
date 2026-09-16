import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Reports.css";
import reconixLogo from "../../assets/logo/ReconIXLogo.png";

export default function Reports() {
  // =========================================
  // STATE: REPORTS DATA
  // =========================================
  const [reports, setReports] = useState([
    {
      id: 1,
      name: "Executive Security Report",
      scan: "Website Security Scan - Prod",
      type: "Executive",
      generated: "Today, 02:45 PM",
      status: "Ready",
      format: "PDF",
      size: "2.4 MB",
      findings: 18,
      riskScore: "B+",
    },
    {
      id: 2,
      name: "Technical Security Assessment",
      scan: "API Security Scan",
      type: "Technical",
      generated: "Today, 01:15 PM",
      status: "Ready",
      format: "PDF",
      size: "4.8 MB",
      findings: 24,
      riskScore: "C",
    },
    {
      id: 3,
      name: "Vulnerability Assessment Report",
      scan: "Network Infrastructure Scan",
      type: "Vulnerability",
      generated: "Yesterday, 05:40 PM",
      status: "Ready",
      format: "PDF",
      size: "3.1 MB",
      findings: 9,
      riskScore: "A-",
    },
    {
      id: 4,
      name: "Infrastructure Recon Report",
      scan: "External Attack Surface",
      type: "Infrastructure",
      generated: "May 15, 2026",
      status: "Ready",
      format: "PDF",
      size: "1.9 MB",
      findings: 31,
      riskScore: "C+",
    },
    {
      id: 5,
      name: "Cloud Configuration Audit",
      scan: "AWS Production Scan",
      type: "Compliance",
      generated: "Just now",
      status: "Processing",
      format: "PDF",
      size: "Pending",
      findings: 7,
      riskScore: "In Progress",
    },
    {
      id: 6,
      name: "Full Scope Penetration Report",
      scan: "Internal Network Perimeter",
      type: "Pentest",
      generated: "May 12, 2026",
      status: "Ready",
      format: "PDF",
      size: "6.2 MB",
      findings: 14,
      riskScore: "B",
    },
  ]);

  // =========================================
  // STATE: FILTERS & SEARCH
  // =========================================
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // =========================================
  // STATE: MODALS & TOAST
  // =========================================
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [selectedReportPreview, setSelectedReportPreview] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // =========================================
  // FORM STATE
  // =========================================
  const [formName, setFormName] = useState("");
  const [formType, setFormType] = useState("Executive");
  const [formScan, setFormScan] = useState("Website Security Scan - Prod");
  const [formFormat, setFormFormat] = useState("PDF");
  const [formIncludeSummary, setFormIncludeSummary] = useState(true);

  // =========================================
  // TOAST HANDLER
  // =========================================
  const triggerToast = (msg) => {
    setToastMessage(msg);

    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // =========================================
  // GENERATE REPORT
  // =========================================
  const handleOpenGenerate = () => {
    setFormName("");
    setFormType("Executive");
    setFormScan("Website Security Scan - Prod");
    setFormFormat("PDF");
    setFormIncludeSummary(true);
    setShowGenerateModal(true);
  };

  const handleSubmitGenerate = (e) => {
    e.preventDefault();

    const reportTitle =
      formName.trim() || `${formType} Security Assessment`;

    const newReport = {
      id: Date.now(),
      name: reportTitle,
      scan: formScan,
      type: formType,
      generated: "Just now",
      status: "Ready",
      format: formFormat,
      size:
        formFormat === "JSON"
          ? "420 KB"
          : formFormat === "CSV"
          ? "180 KB"
          : "2.8 MB",
      findings: Math.floor(Math.random() * 20) + 5,
      riskScore: "B+",
    };

    setReports((prevReports) => [newReport, ...prevReports]);
    setShowGenerateModal(false);

    triggerToast(`Report "${reportTitle}" generated successfully!`);
  };

  // =========================================
  // VIEW & DOWNLOAD
  // =========================================
  const handleView = (report) => {
    setSelectedReportPreview(report);
  };

  const handleDownload = (report) => {
    triggerToast(`Downloading ${report.name} (${report.format})...`);
  };

  // =========================================
  // FILTER REPORTS
  // =========================================
  const filteredReports = reports.filter((item) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(search) ||
      item.scan.toLowerCase().includes(search) ||
      item.type.toLowerCase().includes(search);

    const matchesType =
      typeFilter === "All" || item.type === typeFilter;

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="reports-page">

      {/* =========================================
          TOAST
      ========================================= */}
      {toastMessage && (
        <div className="reports-toast">
          <span>✓</span>
          <p>{toastMessage}</p>
        </div>
      )}

      {/* =========================================
          SIDEBAR
      ========================================= */}
      <aside className="reports-sidebar">

        {/* BRAND */}
        <Link
          to="/"
          className="reports-sidebar-brand"
          style={{ textDecoration: "none" }}
        >
          <img
            src={reconixLogo}
            alt="ReconIX"
            className="reports-brand-logo"
          />

          <div className="reports-brand-text">
            <div className="reports-brand-name">
              Recon<span>IX</span>
            </div>

            <span className="reports-brand-sub">
              Reconnaissance Platform
            </span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="reports-nav">

          <Link to="/dashboard">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/assets">
            <span>▣</span>
            Assets
          </Link>

          <Link to="/scans">
            <span>◉</span>
            Scans
          </Link>

          <Link to="/vulnerabilities">
            <span>♢</span>
            Vulnerabilities
          </Link>

          <Link to="/threat-intelligence">
            <span>◈</span>
            Threat Intelligence
          </Link>

          <Link to="/reports" className="active">
            <span>▤</span>
            Reports
          </Link>

          {/* Automation route is not currently present in App.jsx */}
          <Link to="/automation">
            <span>⚙</span>
            Automation
          </Link>

          <Link to="/integrations">
            <span>✣</span>
            Integrations
          </Link>

          <Link to="/settings">
            <span>⚙</span>
            Settings
          </Link>

        </nav>

        {/* PLAN CARD */}
        <div className="reports-plan-card">
          <div className="reports-plan-icon">♛</div>

          <h4>Enterprise Plan</h4>

          <p>Valid until Dec 31, 2026</p>

          <button>View Plan</button>
        </div>

        {/* SYSTEM STATUS */}
        <div className="reports-system-card">

          <div className="reports-system-header">
            <strong>System Status</strong>
            <span>→</span>
          </div>

          <div className="reports-system-status">
            <span>✓</span>

            <div>
              <strong>All Systems Secure</strong>
              <p>Everything is running smoothly.</p>
            </div>
          </div>

        </div>

      </aside>

      {/* =========================================
          MAIN WORKSPACE
      ========================================= */}
      <main className="reports-main">

        {/* TOPBAR */}
        <header className="reports-topbar">

          <div className="breadcrumbs">
            <span>Dashboard</span>
            <b>›</b>
            <strong>Reports</strong>
          </div>

          <div className="topbar-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search assets, scans, vulnerabilities..."
            />

            <kbd>⌘ K</kbd>
          </div>

          <div className="topbar-user">

            <div className="topbar-icon">
              ♧
              <small>12</small>
            </div>

            <div className="topbar-icon">?</div>

            <div className="topbar-icon">☾</div>

            <div className="user-avatar">A</div>

            <div className="user-info">
              <strong>Admin</strong>
              <span>Administrator⌄</span>
            </div>

          </div>

        </header>

        {/* PAGE HEADER */}
        <div className="reports-header">

          <div className="reports-title-area">
            <h1>Reports</h1>

            <p>
              Generate, manage and download security assessment reports.
            </p>
          </div>

          <button
            className="reports-generate-btn"
            onClick={handleOpenGenerate}
          >
            + Generate Report
          </button>

        </div>

        {/* STATISTICS */}
        <div className="reports-stats">

          <div className="reports-stat-card">
            <div className="reports-stat-header">
              <span>Total Reports</span>
              <span className="reports-stat-icon">▤</span>
            </div>

            <strong>24</strong>

            <small>Across all active assets</small>
          </div>

          <div className="reports-stat-card">
            <div className="reports-stat-header">
              <span>Generated</span>
              <span className="reports-stat-icon success">✓</span>
            </div>

            <strong>21</strong>

            <small>Ready for export & sharing</small>
          </div>

          <div className="reports-stat-card">
            <div className="reports-stat-header">
              <span>Scheduled</span>
              <span className="reports-stat-icon purple">↻</span>
            </div>

            <strong>3</strong>

            <small>Recurring weekly & monthly</small>
          </div>

        </div>

        {/* TOOLBAR */}
        <div className="reports-toolbar">

          <div className="reports-search-input">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search reports by name, scan or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchTerm("")}
              >
                ×
              </button>
            )}

          </div>

          <div className="reports-filters">

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="reports-select"
            >
              <option value="All">All Types</option>
              <option value="Executive">Executive</option>
              <option value="Technical">Technical</option>
              <option value="Vulnerability">Vulnerability</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Compliance">Compliance</option>
              <option value="Pentest">Pentest</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="reports-select"
            >
              <option value="All">All Statuses</option>
              <option value="Ready">Ready</option>
              <option value="Processing">Processing</option>
            </select>

          </div>

        </div>

        {/* REPORTS TABLE */}
        <div className="reports-table-card">

          <div className="reports-table-responsive">

            <table className="reports-table">

              <thead>
                <tr>
                  <th>Report Name</th>
                  <th>Scan</th>
                  <th>Type</th>
                  <th>Generated</th>
                  <th>Status</th>
                  <th className="th-action">Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredReports.length > 0 ? (
                  filteredReports.map((report) => (
                    <tr
                      key={report.id}
                      className="reports-row"
                    >

                      <td className="col-name">

                        <div className="report-name-group">

                          <span className="report-format-pill">
                            {report.format}
                          </span>

                          <div>
                            <strong className="report-title">
                              {report.name}
                            </strong>

                            <span className="report-meta">
                              {report.size} • {report.findings} findings
                            </span>
                          </div>

                        </div>

                      </td>

                      <td className="col-scan">
                        <span className="scan-target-text">
                          {report.scan}
                        </span>
                      </td>

                      <td className="col-type">
                        <span className="report-type-badge">
                          {report.type}
                        </span>
                      </td>

                      <td className="col-date">
                        <span className="report-date-text">
                          {report.generated}
                        </span>
                      </td>

                      <td className="col-status">

                        {report.status === "Ready" ? (
                          <span className="status-badge ready">
                            <span className="dot"></span>
                            Ready
                          </span>
                        ) : (
                          <span className="status-badge processing">
                            <span className="spinner">⟳</span>
                            Processing
                          </span>
                        )}

                      </td>

                      <td className="col-action">

                        <div className="action-button-group">

                          <button
                            className="btn-view"
                            onClick={() => handleView(report)}
                            title="View Report Details"
                          >
                            View
                          </button>

                          <button
                            className="btn-download"
                            onClick={() => handleDownload(report)}
                            disabled={report.status !== "Ready"}
                            title={
                              report.status === "Ready"
                                ? "Download Report"
                                : "Report is currently processing"
                            }
                          >
                            Download
                          </button>

                        </div>

                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>

                    <td
                      colSpan="6"
                      className="reports-empty-cell"
                    >

                      <div className="empty-state">

                        <span className="empty-icon">▤</span>

                        <h4>No reports found</h4>

                        <p>
                          Try adjusting your search criteria or filter options.
                        </p>

                      </div>

                    </td>

                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>

      </main>

      {/* =========================================
          GENERATE REPORT MODAL
      ========================================= */}
      {showGenerateModal && (
        <div
          className="reports-modal-overlay"
          onClick={() => setShowGenerateModal(false)}
        >

          <div
            className="reports-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="reports-modal-header">

              <div>

                <span className="reports-modal-eyebrow">
                  SECURITY REPORTING
                </span>

                <h2>Generate Report</h2>

                <p>
                  Configure and generate a comprehensive security evaluation report.
                </p>

              </div>

              <button
                className="reports-modal-close"
                onClick={() => setShowGenerateModal(false)}
              >
                ×
              </button>

            </div>

            <form onSubmit={handleSubmitGenerate}>

              <div className="reports-modal-body">

                <div className="reports-field">

                  <label>Report Name</label>

                  <input
                    type="text"
                    placeholder="e.g. Q2 Executive Security Summary"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />

                </div>

                <div className="reports-field-row">

                  <div className="reports-field">

                    <label>Report Type</label>

                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value)}
                    >
                      <option value="Executive">
                        Executive Summary
                      </option>

                      <option value="Technical">
                        Technical Assessment
                      </option>

                      <option value="Vulnerability">
                        Vulnerability Audit
                      </option>

                      <option value="Infrastructure">
                        Infrastructure Recon
                      </option>

                      <option value="Compliance">
                        Compliance Evaluation
                      </option>

                    </select>

                  </div>

                  <div className="reports-field">

                    <label>Scan Target</label>

                    <select
                      value={formScan}
                      onChange={(e) => setFormScan(e.target.value)}
                    >
                      <option value="Website Security Scan - Prod">
                        Website Security Scan - Prod
                      </option>

                      <option value="API Security Scan">
                        API Security Scan
                      </option>

                      <option value="Network Infrastructure Scan">
                        Network Infrastructure Scan
                      </option>

                      <option value="External Attack Surface">
                        External Attack Surface
                      </option>

                      <option value="AWS Production Scan">
                        AWS Production Scan
                      </option>

                    </select>

                  </div>

                </div>

                <div className="reports-field">

                  <label>Export Format</label>

                  <div className="format-selector">

                    {["PDF", "CSV", "JSON"].map((fmt) => (
                      <button
                        type="button"
                        key={fmt}
                        className={`format-option ${
                          formFormat === fmt ? "selected" : ""
                        }`}
                        onClick={() => setFormFormat(fmt)}
                      >

                        <span className="format-title">
                          {fmt}
                        </span>

                        <span className="format-desc">
                          {fmt === "PDF"
                            ? "Complete styled document"
                            : fmt === "CSV"
                            ? "Raw spreadsheet data"
                            : "Structured machine export"}
                        </span>

                      </button>
                    ))}

                  </div>

                </div>

                <div className="reports-checkbox-field">

                  <label className="checkbox-container">

                    <input
                      type="checkbox"
                      checked={formIncludeSummary}
                      onChange={(e) =>
                        setFormIncludeSummary(e.target.checked)
                      }
                    />

                    <span className="checkmark"></span>

                    <span>
                      Include executive summary and remediation roadmap
                    </span>

                  </label>

                </div>

              </div>

              <div className="reports-modal-footer">

                <button
                  type="button"
                  className="reports-btn-secondary"
                  onClick={() => setShowGenerateModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="reports-btn-primary"
                >
                  Generate Report
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

      {/* =========================================
          REPORT PREVIEW MODAL
      ========================================= */}
      {selectedReportPreview && (
        <div
          className="reports-modal-overlay"
          onClick={() => setSelectedReportPreview(null)}
        >

          <div
            className="reports-modal preview-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="reports-modal-header">

              <div>

                <span className="reports-modal-eyebrow">
                  REPORT PREVIEW • {selectedReportPreview.format}
                </span>

                <h2>
                  {selectedReportPreview.name}
                </h2>

                <p>
                  Generated: {selectedReportPreview.generated}
                </p>

              </div>

              <button
                className="reports-modal-close"
                onClick={() => setSelectedReportPreview(null)}
              >
                ×
              </button>

            </div>

            <div className="reports-modal-body">

              <div className="preview-meta-grid">

                <div className="preview-meta-item">
                  <span>Target Scan</span>
                  <strong>
                    {selectedReportPreview.scan}
                  </strong>
                </div>

                <div className="preview-meta-item">
                  <span>Type</span>
                  <strong>
                    {selectedReportPreview.type}
                  </strong>
                </div>

                <div className="preview-meta-item">
                  <span>Findings</span>
                  <strong className="text-warning">
                    {selectedReportPreview.findings} Total
                  </strong>
                </div>

                <div className="preview-meta-item">
                  <span>Overall Risk</span>
                  <strong className="text-purple">
                    {selectedReportPreview.riskScore}
                  </strong>
                </div>

              </div>

              <div className="preview-section">

                <h4>Executive Summary Overview</h4>

                <p>
                  This security assessment was executed against{" "}
                  <b>{selectedReportPreview.scan}</b> to identify
                  misconfigurations, exploitable surface areas, and
                  compliance vulnerabilities. All findings have been
                  cataloged with CVE correlations and mitigation guidelines.
                </p>

              </div>

              <div className="preview-section">

                <h4>Scope & Findings Breakdown</h4>

                <div className="preview-breakdown">

                  <div className="breakdown-bar">

                    <span
                      className="bar-critical"
                      style={{ width: "25%" }}
                    ></span>

                    <span
                      className="bar-high"
                      style={{ width: "35%" }}
                    ></span>

                    <span
                      className="bar-medium"
                      style={{ width: "25%" }}
                    ></span>

                    <span
                      className="bar-low"
                      style={{ width: "15%" }}
                    ></span>

                  </div>

                  <div className="breakdown-legend">

                    <span>
                      <i className="crit"></i>
                      Critical (2)
                    </span>

                    <span>
                      <i className="high"></i>
                      High (5)
                    </span>

                    <span>
                      <i className="med"></i>
                      Medium (8)
                    </span>

                    <span>
                      <i className="low"></i>
                      Low (9)
                    </span>

                  </div>

                </div>

              </div>

            </div>

            <div className="reports-modal-footer">

              <button
                type="button"
                className="reports-btn-secondary"
                onClick={() => setSelectedReportPreview(null)}
              >
                Close
              </button>

              <button
                type="button"
                className="reports-btn-primary"
                onClick={() => {
                  handleDownload(selectedReportPreview);
                  setSelectedReportPreview(null);
                }}
              >
                Download {selectedReportPreview.format}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}