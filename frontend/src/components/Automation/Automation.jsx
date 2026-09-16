import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Automation.css";
import reconixLogo from "../../assets/logo/ReconIXLogo.png";

export default function Automation() {
  // =========================================
  // AUTOMATION DATA
  // =========================================
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: "Daily Asset Discovery",
      description:
        "Automatically discover and update assets every day.",
      trigger: "Scheduled",
      action: "Asset Discovery",
      schedule: "Every day at 02:00 AM",
      lastRun: "Today, 02:00 AM",
      nextRun: "Tomorrow, 02:00 AM",
      status: "Active",
    },
    {
      id: 2,
      name: "Critical Vulnerability Alert",
      description:
        "Send an alert when a critical vulnerability is detected.",
      trigger: "Finding Detected",
      action: "Send Notification",
      schedule: "On critical finding",
      lastRun: "Today, 11:42 AM",
      nextRun: "On trigger",
      status: "Active",
    },
    {
      id: 3,
      name: "Weekly Security Scan",
      description:
        "Run a full security scan against production assets.",
      trigger: "Scheduled",
      action: "Security Scan",
      schedule: "Every Monday at 01:00 AM",
      lastRun: "Sep 14, 01:00 AM",
      nextRun: "Sep 21, 01:00 AM",
      status: "Active",
    },
    {
      id: 4,
      name: "New Asset Notification",
      description:
        "Notify the security team whenever a new asset is discovered.",
      trigger: "New Asset",
      action: "Send Notification",
      schedule: "On asset discovery",
      lastRun: "Sep 13, 04:21 PM",
      nextRun: "On trigger",
      status: "Paused",
    },
    {
      id: 5,
      name: "Monthly Executive Report",
      description:
        "Generate a monthly executive security report.",
      trigger: "Scheduled",
      action: "Generate Report",
      schedule: "First day of every month",
      lastRun: "Sep 01, 03:00 AM",
      nextRun: "Oct 01, 03:00 AM",
      status: "Active",
    },
    {
      id: 6,
      name: "Scan Failure Alert",
      description:
        "Notify administrators when a scheduled scan fails.",
      trigger: "Scan Failed",
      action: "Send Notification",
      schedule: "On scan failure",
      lastRun: "Sep 10, 08:15 AM",
      nextRun: "On trigger",
      status: "Paused",
    },
  ]);

  // =========================================
  // STATE
  // =========================================
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formTrigger, setFormTrigger] = useState("Scheduled");
  const [formAction, setFormAction] = useState("Security Scan");
  const [formSchedule, setFormSchedule] = useState(
    "Every day at 02:00 AM"
  );

  // =========================================
  // TOAST
  // =========================================
  const triggerToast = (message) => {
    setToastMessage(message);

    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // =========================================
  // TOGGLE AUTOMATION
  // =========================================
  const toggleAutomation = (id) => {
    setAutomations((current) =>
      current.map((automation) =>
        automation.id === id
          ? {
              ...automation,
              status:
                automation.status === "Active"
                  ? "Paused"
                  : "Active",
            }
          : automation
      )
    );

    const selected = automations.find(
      (automation) => automation.id === id
    );

    if (selected) {
      triggerToast(
        selected.status === "Active"
          ? `${selected.name} paused`
          : `${selected.name} activated`
      );
    }
  };

  // =========================================
  // CREATE AUTOMATION
  // =========================================
  const openCreateModal = () => {
    setFormName("");
    setFormDescription("");
    setFormTrigger("Scheduled");
    setFormAction("Security Scan");
    setFormSchedule("Every day at 02:00 AM");
    setShowCreateModal(true);
  };

  const handleCreateAutomation = (event) => {
    event.preventDefault();

    const automationName =
      formName.trim() || "New Security Automation";

    const newAutomation = {
      id: Date.now(),
      name: automationName,
      description:
        formDescription.trim() ||
        "Custom ReconIX security automation workflow.",
      trigger: formTrigger,
      action: formAction,
      schedule: formSchedule,
      lastRun: "Never",
      nextRun:
        formTrigger === "Scheduled"
          ? formSchedule
          : "On trigger",
      status: "Active",
    };

    setAutomations((current) => [
      newAutomation,
      ...current,
    ]);

    setShowCreateModal(false);

    triggerToast(
      `Automation "${automationName}" created successfully`
    );
  };

  // =========================================
  // FILTER
  // =========================================
  const filteredAutomations = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return automations.filter((automation) => {
      const matchesSearch =
        automation.name.toLowerCase().includes(search) ||
        automation.description.toLowerCase().includes(search) ||
        automation.trigger.toLowerCase().includes(search) ||
        automation.action.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        automation.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [automations, searchTerm, statusFilter]);

  // =========================================
  // STATISTICS
  // =========================================
  const totalAutomations = automations.length;

  const activeAutomations = automations.filter(
    (item) => item.status === "Active"
  ).length;

  const pausedAutomations = automations.filter(
    (item) => item.status === "Paused"
  ).length;

  const scheduledAutomations = automations.filter(
    (item) => item.trigger === "Scheduled"
  ).length;

  // =========================================
  // UI
  // =========================================
  return (
    <div className="automation-page">

      {/* =========================================
          TOAST
      ========================================= */}
      {toastMessage && (
        <div className="automation-toast">
          <span>✓</span>
          <p>{toastMessage}</p>
        </div>
      )}

      {/* =========================================
          SIDEBAR
      ========================================= */}
      <aside className="automation-sidebar">

        {/* BRAND */}
        <Link
          to="/"
          className="automation-sidebar-brand"
        >
          <img
            src={reconixLogo}
            alt="ReconIX"
            className="automation-brand-logo"
          />

          <div className="automation-brand-text">
            <div className="automation-brand-name">
              Recon<span>IX</span>
            </div>

            <span className="automation-brand-sub">
              Reconnaissance Platform
            </span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="automation-nav">

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

          <Link to="/reports">
            <span>▤</span>
            Reports
          </Link>

          <Link
            to="/automation"
            className="active"
          >
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

        {/* PLAN */}
        <div className="automation-plan-card">

          <div className="automation-plan-icon">
            ♛
          </div>

          <h4>Enterprise Plan</h4>

          <p>Valid until Dec 31, 2026</p>

          <button type="button">
            View Plan
          </button>

        </div>

        {/* SYSTEM STATUS */}
        <div className="automation-system-card">

          <div className="automation-system-header">
            <strong>System Status</strong>
            <span>→</span>
          </div>

          <div className="automation-system-status">

            <span>✓</span>

            <div>
              <strong>All Systems Secure</strong>
              <p>Everything is running smoothly.</p>
            </div>

          </div>

        </div>

      </aside>

      {/* =========================================
          MAIN
      ========================================= */}
      <main className="automation-main">

        {/* TOPBAR */}
        <header className="automation-topbar">

          <div className="automation-breadcrumbs">
            <span>Dashboard</span>
            <b>›</b>
            <strong>Automation</strong>
          </div>

          <div className="automation-top-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search assets, scans, vulnerabilities..."
            />

            <kbd>⌘ K</kbd>

          </div>

          <div className="automation-top-user">

            <div className="automation-top-icon">
              ♧
              <small>12</small>
            </div>

            <div className="automation-top-icon">
              ?
            </div>

            <div className="automation-top-icon">
              ☾
            </div>

            <div className="automation-avatar">
              A
            </div>

            <div className="automation-user-info">
              <strong>Admin</strong>
              <span>Administrator⌄</span>
            </div>

          </div>

        </header>

        {/* PAGE HEADER */}
        <section className="automation-header">

          <div className="automation-title-area">

            <div className="automation-title-icon">
              ⚙
            </div>

            <div>
              <h1>Automation</h1>

              <p>
                Create and manage automated security workflows.
              </p>
            </div>

          </div>

          <button
            className="automation-create-btn"
            onClick={openCreateModal}
          >
            + Create Automation
          </button>

        </section>

        {/* STATS */}
        <section className="automation-stats">

          <div className="automation-stat-card">

            <div className="automation-stat-icon purple">
              ⚙
            </div>

            <div>
              <strong>{totalAutomations}</strong>
              <span>Total Automations</span>
            </div>

          </div>

          <div className="automation-stat-card">

            <div className="automation-stat-icon green">
              ✓
            </div>

            <div>
              <strong>{activeAutomations}</strong>
              <span>Active</span>
            </div>

          </div>

          <div className="automation-stat-card">

            <div className="automation-stat-icon cyan">
              ◷
            </div>

            <div>
              <strong>{scheduledAutomations}</strong>
              <span>Scheduled</span>
            </div>

          </div>

          <div className="automation-stat-card">

            <div className="automation-stat-icon blue">
              ◌
            </div>

            <div>
              <strong>{pausedAutomations}</strong>
              <span>Paused</span>
            </div>

          </div>

        </section>

        {/* TOOLBAR */}
        <section className="automation-toolbar">

          <div className="automation-search">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search automations..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
              >
                ×
              </button>
            )}

          </div>

          <div className="automation-filters">

            {["All", "Active", "Paused"].map((filter) => (
              <button
                type="button"
                key={filter}
                className={
                  statusFilter === filter
                    ? "active"
                    : ""
                }
                onClick={() => setStatusFilter(filter)}
              >
                {filter}
              </button>
            ))}

          </div>

        </section>

        {/* SECTION HEADER */}
        <section className="automation-section">

          <div className="automation-section-header">

            <div>
              <h2>Automation Workflows</h2>

              <p>
                Automated rules that continuously monitor and
                protect your environment.
              </p>
            </div>

            <span>
              {filteredAutomations.length} workflows
            </span>

          </div>

          {/* AUTOMATION GRID */}
          <div className="automation-grid">

            {filteredAutomations.length > 0 ? (
              filteredAutomations.map((automation) => (
                <article
                  className={`automation-card ${
                    automation.status === "Active"
                      ? "is-active"
                      : "is-paused"
                  }`}
                  key={automation.id}
                >

                  {/* CARD HEADER */}
                  <div className="automation-card-header">

                    <div className="automation-workflow-icon">
                      ⚙
                    </div>

                    <div className="automation-card-heading">

                      <h3>
                        {automation.name}
                      </h3>

                      <span>
                        {automation.trigger}
                      </span>

                    </div>

                    <span
                      className={`automation-status ${
                        automation.status.toLowerCase()
                      }`}
                    >
                      <i></i>
                      {automation.status}
                    </span>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="automation-description">
                    {automation.description}
                  </p>

                  {/* FLOW */}
                  <div className="automation-flow">

                    <div className="automation-flow-item">

                      <span className="flow-label">
                        TRIGGER
                      </span>

                      <strong>
                        {automation.trigger}
                      </strong>

                    </div>

                    <div className="automation-flow-arrow">
                      →
                    </div>

                    <div className="automation-flow-item">

                      <span className="flow-label">
                        ACTION
                      </span>

                      <strong>
                        {automation.action}
                      </strong>

                    </div>

                  </div>

                  {/* DETAILS */}
                  <div className="automation-details">

                    <div>
                      <span>Schedule</span>
                      <strong>
                        {automation.schedule}
                      </strong>
                    </div>

                    <div>
                      <span>Last Run</span>
                      <strong>
                        {automation.lastRun}
                      </strong>
                    </div>

                    <div>
                      <span>Next Run</span>
                      <strong>
                        {automation.nextRun}
                      </strong>
                    </div>

                  </div>

                  {/* FOOTER */}
                  <div className="automation-card-footer">

                    <button
                      type="button"
                      className="automation-run-btn"
                      onClick={() =>
                        triggerToast(
                          `${automation.name} run started`
                        )
                      }
                    >
                      ▶ Run Now
                    </button>

                    <button
                      type="button"
                      className="automation-toggle-btn"
                      onClick={() =>
                        toggleAutomation(automation.id)
                      }
                    >
                      {automation.status === "Active"
                        ? "Pause"
                        : "Activate"}
                    </button>

                    <button
                      type="button"
                      className="automation-more-btn"
                      onClick={() =>
                        triggerToast(
                          `${automation.name} options opened`
                        )
                      }
                      aria-label="More options"
                    >
                      ⋯
                    </button>

                  </div>

                </article>
              ))
            ) : (
              <div className="automation-empty">

                <div className="automation-empty-icon">
                  ⚙
                </div>

                <h3>No automations found</h3>

                <p>
                  Try changing your search or filter.
                </p>

              </div>
            )}

          </div>

        </section>

        {/* SECURITY NOTE */}
        <section className="automation-security-note">

          <div className="automation-security-icon">
            🔒
          </div>

          <div>
            <strong>Automation Security</strong>

            <p>
              Automated workflows execute using your configured
              ReconIX permissions and security policies.
            </p>
          </div>

          <span>Protected</span>

        </section>

      </main>

      {/* =========================================
          CREATE AUTOMATION MODAL
      ========================================= */}
      {showCreateModal && (
        <div
          className="automation-modal-overlay"
          onClick={() => setShowCreateModal(false)}
        >

          <div
            className="automation-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="automation-modal-header">

              <div>

                <span>
                  AUTOMATION WORKFLOW
                </span>

                <h2>Create Automation</h2>

                <p>
                  Configure a new automated security workflow.
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  setShowCreateModal(false)
                }
              >
                ×
              </button>

            </div>

            <form onSubmit={handleCreateAutomation}>

              <div className="automation-modal-body">

                <div className="automation-field">

                  <label>Automation Name</label>

                  <input
                    type="text"
                    placeholder="e.g. Daily Security Scan"
                    value={formName}
                    onChange={(event) =>
                      setFormName(event.target.value)
                    }
                  />

                </div>

                <div className="automation-field">

                  <label>Description</label>

                  <textarea
                    placeholder="Describe what this automation should do..."
                    value={formDescription}
                    onChange={(event) =>
                      setFormDescription(event.target.value)
                    }
                    rows="3"
                  />

                </div>

                <div className="automation-field-row">

                  <div className="automation-field">

                    <label>Trigger</label>

                    <select
                      value={formTrigger}
                      onChange={(event) =>
                        setFormTrigger(event.target.value)
                      }
                    >
                      <option value="Scheduled">
                        Scheduled
                      </option>

                      <option value="Finding Detected">
                        Finding Detected
                      </option>

                      <option value="New Asset">
                        New Asset
                      </option>

                      <option value="Scan Failed">
                        Scan Failed
                      </option>

                    </select>

                  </div>

                  <div className="automation-field">

                    <label>Action</label>

                    <select
                      value={formAction}
                      onChange={(event) =>
                        setFormAction(event.target.value)
                      }
                    >
                      <option value="Security Scan">
                        Security Scan
                      </option>

                      <option value="Asset Discovery">
                        Asset Discovery
                      </option>

                      <option value="Send Notification">
                        Send Notification
                      </option>

                      <option value="Generate Report">
                        Generate Report
                      </option>

                    </select>

                  </div>

                </div>

                <div className="automation-field">

                  <label>Schedule</label>

                  <select
                    value={formSchedule}
                    onChange={(event) =>
                      setFormSchedule(event.target.value)
                    }
                    disabled={formTrigger !== "Scheduled"}
                  >
                    <option value="Every day at 02:00 AM">
                      Every day at 02:00 AM
                    </option>

                    <option value="Every Monday at 01:00 AM">
                      Every Monday at 01:00 AM
                    </option>

                    <option value="Every week">
                      Every week
                    </option>

                    <option value="First day of every month">
                      First day of every month
                    </option>

                  </select>

                </div>

              </div>

              <div className="automation-modal-footer">

                <button
                  type="button"
                  className="automation-cancel-btn"
                  onClick={() =>
                    setShowCreateModal(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="automation-save-btn"
                >
                  Create Automation
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}