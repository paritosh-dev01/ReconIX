import React, { useState } from "react";
import "./Dashboard.css";
import Assets from "../Assets/Assets";
import Scans from "../../Scans/Scans";
import ReconIXLogo from "../../assets/logo/ReconIXLogo.png";

const Dashboard = () => {

    const [activePage, setActivePage] = useState("dashboard");

    const vulnerabilities = [
        {
            name: "SQL Injection",
            severity: "Critical",
            assets: 12,
            found: "2 hours ago"
        },
        {
            name: "Remote Code Execution",
            severity: "Critical",
            assets: 7,
            found: "5 hours ago"
        },
        {
            name: "Cross-Site Scripting (XSS)",
            severity: "High",
            assets: 23,
            found: "7 hours ago"
        },
        {
            name: "Broken Authentication",
            severity: "High",
            assets: 18,
            found: "9 hours ago"
        },
        {
            name: "Security Misconfiguration",
            severity: "Medium",
            assets: 31,
            found: "11 hours ago"
        }
    ];

    const runningScans = [
        {
            name: "Website Security Scan",
            target: "example.com",
            progress: 78,
            time: "2m 15s left"
        },
        {
            name: "Network Vulnerability Scan",
            target: "192.168.1.0/24",
            progress: 46,
            time: "4m 32s left"
        },
        {
            name: "API Security Scan",
            target: "api.example.com",
            progress: 32,
            time: "6m 10s left"
        },
        {
            name: "Cloud Configuration Scan",
            target: "AWS - Prod",
            progress: 15,
            time: "7m 45s left"
        }
    ];

    const recentActivity = [
        {
            icon: "✓",
            title: "Scan completed",
            description: "Website Security Scan on example.com",
            time: "2m ago",
            type: "success"
        },
        {
            icon: "!",
            title: "New vulnerability found",
            description: "SQL Injection on test.example.com",
            time: "15m ago",
            type: "warning"
        },
        {
            icon: "i",
            title: "Asset added",
            description: "server-02.reconix.com",
            time: "1h ago",
            type: "info"
        },
        {
            icon: "◆",
            title: "Critical vulnerability resolved",
            description: "Remote Code Execution on api.example.com",
            time: "2h ago",
            type: "purple"
        },
        {
            icon: "✓",
            title: "Scan completed",
            description: "Network Scan on 192.168.1.0/24",
            time: "3h ago",
            type: "success"
        }
    ];

    return (
        <div className="dashboard-page">

            {/* =========================================
                SIDEBAR
            ========================================= */}

            <aside className="dashboard-sidebar">

                <div className="dashboard-sidebar-brand">

                  <img
                     src={ReconIXLogo}
                     alt="ReconIX"
                     className="dashboard-brand-logo"
                   />

                   <div className="dashboard-brand-name">
                       ReconIX
                    </div>

                </div>


                <nav className="dashboard-nav">

                    <button
                        className={`dashboard-nav-item ${
                            activePage === "dashboard" ? "active" : ""
                        }`}
                        onClick={() => setActivePage("dashboard")}
                    >
                        <span>⌂</span>
                        Dashboard
                    </button>


                    <button
                        className={`dashboard-nav-item ${
                            activePage === "assets" ? "active" : ""
                        }`}
                        onClick={() => setActivePage("assets")}
                    >
                        <span>▣</span>
                        Assets
                    </button>


                    <button
                        className={`dashboard-nav-item ${
                            activePage === "scans" ? "active" : ""
                        }`}
                        onClick={() => setActivePage("scans")}
                    >
                        <span>◉</span>
                        Scans
                    </button>


                    <button className="dashboard-nav-item">
                        <span>♢</span>
                        Vulnerabilities
                    </button>

                    <button className="dashboard-nav-item">
                        <span>◈</span>
                        Threat Intelligence
                    </button>

                    <button className="dashboard-nav-item">
                        <span>▤</span>
                        Reports
                    </button>

                    <button className="dashboard-nav-item">
                        <span>⚙</span>
                        Automation
                    </button>

                    <button className="dashboard-nav-item">
                        <span>✣</span>
                        Integrations
                    </button>

                    <button className="dashboard-nav-item">
                        <span>⚙</span>
                        Settings
                    </button>

                </nav>


                {/* ENTERPRISE PLAN */}

                <div className="dashboard-plan-card">

                    <div className="dashboard-plan-icon">
                        ♛
                    </div>

                    <h4>
                        Enterprise Plan
                    </h4>

                    <p>
                        Valid until Dec 31, 2025
                    </p>

                    <button>
                        View Plan
                    </button>

                </div>


                {/* SYSTEM STATUS */}

                <div className="dashboard-system-card">

                    <div className="dashboard-system-header">
                        <strong>
                            System Status
                        </strong>

                        <span>
                            →
                        </span>
                    </div>

                    <div className="dashboard-system-status">
                        <span>
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

            </aside>


            {/* =========================================
                MAIN
            ========================================= */}

            <main className="dashboard-main">

                {activePage === "assets" ? (

                    <Assets />

                ) : activePage === "scans" ? (

                    <Scans />

                ) : (

                    <>

                        {/* =================================
                            TOPBAR
                        ================================= */}

                        <header className="dashboard-topbar">

                            <div className="dashboard-heading">

                                <h1>
                                    Dashboard
                                </h1>

                                <p>
                                    Overview of your security posture and activities
                                </p>

                            </div>


                            <div className="dashboard-top-actions">

                                <div className="dashboard-search">

                                    <span>
                                        🔍
                                    </span>

                                    <input
                                        type="text"
                                        placeholder="Search assets, scans, vulnerabilities..."
                                    />

                                    <kbd>
                                        ⌘K
                                    </kbd>

                                </div>


                                <button className="dashboard-icon-btn">
                                    🔔
                                </button>

                                <button className="dashboard-icon-btn">
                                    ?
                                </button>

                                <button className="dashboard-icon-btn">
                                    ☾
                                </button>


                                <div className="dashboard-user">

                                    <div className="dashboard-user-avatar">
                                        A
                                    </div>

                                    <span>
                                        Admin
                                    </span>

                                    <span>
                                        ⌄
                                    </span>

                                </div>

                            </div>

                        </header>


                        {/* =================================
                            DASHBOARD CONTENT
                        ================================= */}

                        <section className="dashboard-content">

                            {/* DATE BAR */}

                            <div className="dashboard-datebar">

                                <div>
                                    <strong>
                                        Security Overview
                                    </strong>

                                    <p>
                                        Monitor your assets, scans and security posture.
                                    </p>
                                </div>

                                <div className="dashboard-date-actions">
                                    <span>
                                        ◫ &nbsp; May 16, 2026 · 11:45 AM
                                    </span>

                                    <button>
                                        Last 7 Days⌄
                                    </button>

                                    <span className="refresh-btn">
                                        ↻
                                    </span>
                                </div>

                            </div>


                            {/* =================================
                                STAT CARDS
                            ================================= */}

                            <div className="dashboard-stats">

                                <div className="dashboard-stat-card">

                                    <div className="dashboard-stat-top">
                                        <span>Total Assets</span>

                                        <div className="dashboard-stat-icon">
                                            ▣
                                        </div>
                                    </div>

                                    <h3>
                                        128
                                    </h3>

                                    <p className="dashboard-stat-positive">
                                        ↑ 12.5%
                                        <span>vs last 7 days</span>
                                    </p>

                                </div>


                                <div className="dashboard-stat-card">

                                    <div className="dashboard-stat-top">
                                        <span>Total Scans</span>

                                        <div className="dashboard-stat-icon purple">
                                            ◉
                                        </div>
                                    </div>

                                    <h3>
                                        45
                                    </h3>

                                    <p className="dashboard-stat-positive">
                                        ↑ 18.3%
                                        <span>vs last 7 days</span>
                                    </p>

                                </div>


                                <div className="dashboard-stat-card">

                                    <div className="dashboard-stat-top">
                                        <span>Vulnerabilities Found</span>

                                        <div className="dashboard-stat-icon critical">
                                            !
                                        </div>
                                    </div>

                                    <h3>
                                        312
                                    </h3>

                                    <p className="dashboard-stat-negative">
                                        ↑ 8.7%
                                        <span>vs last 7 days</span>
                                    </p>

                                </div>


                                <div className="dashboard-stat-card">

                                    <div className="dashboard-stat-top">
                                        <span>Critical Vulnerabilities</span>

                                        <div className="dashboard-stat-icon warning">
                                            !
                                        </div>
                                    </div>

                                    <h3>
                                        18
                                    </h3>

                                    <p className="dashboard-stat-negative">
                                        ↑ 5.9%
                                        <span>vs last 7 days</span>
                                    </p>

                                </div>


                                <div className="dashboard-stat-card">

                                    <div className="dashboard-stat-top">
                                        <span>Assets at Risk</span>

                                        <div className="dashboard-stat-icon danger">
                                            ◎
                                        </div>
                                    </div>

                                    <h3>
                                        26
                                    </h3>

                                    <p className="dashboard-stat-positive">
                                        ↑ 7.3%
                                        <span>vs last 7 days</span>
                                    </p>

                                </div>
</div>



  


                            {/* =================================
                                MAIN GRID
                            ================================= */}

                            <div className="dashboard-grid">

                                {/* =================================
                                    SEVERITY
                                ================================= */}

                                <div className="dashboard-panel severity-panel">

                                    <div className="dashboard-panel-header">

                                        <div>
                                            <h2>
                                                Vulnerabilities by Severity
                                            </h2>
                                        </div>

                                    </div>


                                    <div className="severity-content">

                                        <div className="severity-chart">

                                            <div className="severity-donut">

                                                <div>
                                                    <strong>
                                                        312
                                                    </strong>

                                                    <span>
                                                        Total
                                                    </span>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="severity-list">

                                            <div>
                                                <span className="severity-dot critical-dot" />
                                                <strong>Critical</strong>
                                                <span>18</span>
                                                <small>5.8%</small>
                                            </div>

                                            <div>
                                                <span className="severity-dot high-dot" />
                                                <strong>High</strong>
                                                <span>135</span>
                                                <small>43.3%</small>
                                            </div>

                                            <div>
                                                <span className="severity-dot medium-dot" />
                                                <strong>Medium</strong>
                                                <span>102</span>
                                                <small>32.7%</small>
                                            </div>

                                            <div>
                                                <span className="severity-dot low-dot" />
                                                <strong>Low</strong>
                                                <span>57</span>
                                                <small>18.3%</small>
                                            </div>

                                            <div>
                                                <span className="severity-dot info-dot" />
                                                <strong>Informational</strong>
                                                <span>18</span>
                                                <small>5.8%</small>
                                            </div>

                                        </div>

                                    </div>


                                    <button className="panel-link">
                                        View All Vulnerabilities →
                                    </button>

                                </div>


                                {/* =================================
                                    VULNERABILITY GRAPH
                                ================================= */}

                                <div className="dashboard-panel vulnerability-chart-panel">

                                    <div className="dashboard-panel-header">

                                        <div>
                                            <h2>
                                                Vulnerabilities Over Time
                                            </h2>
                                        </div>

                                        <button className="chart-select">
                                            Line⌄
                                        </button>

                                    </div>


                                    <div className="line-chart">

                                        <div className="chart-grid-lines">
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>

                                        <svg
                                            viewBox="0 0 600 230"
                                            preserveAspectRatio="none"
                                        >

                                            <polyline
                                                points="10,145 90,120 170,128 250,95 330,92 410,62 490,70 580,78"
                                                className="line-critical"
                                            />

                                            <polyline
                                                points="10,185 90,165 170,175 250,160 330,170 410,135 490,150 580,145"
                                                className="line-high"
                                            />

                                            <polyline
                                                points="10,205 90,190 170,195 250,190 330,192 410,170 490,180 580,175"
                                                className="line-medium"
                                            />

                                            <polyline
                                                points="10,218 90,208 170,205 250,210 330,208 410,195 490,200 580,190"
                                                className="line-low"
                                            />

                                        </svg>

                                    </div>


                                    <div className="chart-labels">
                                        <span>May 10</span>
                                        <span>May 11</span>
                                        <span>May 12</span>
                                        <span>May 13</span>
                                        <span>May 14</span>
                                        <span>May 15</span>
                                        <span>May 16</span>
                                    </div>


                                    <div className="chart-legend">

                                        <span>
                                            <i className="critical-dot" />
                                            Critical
                                        </span>

                                        <span>
                                            <i className="high-dot" />
                                            High
                                        </span>

                                        <span>
                                            <i className="medium-dot" />
                                            Medium
                                        </span>

                                        <span>
                                            <i className="low-dot" />
                                            Low
                                        </span>

                                    </div>

                                </div>


                                {/* =================================
                                    RUNNING SCANS
                                ================================= */}

                                <div className="dashboard-panel running-scans-panel">

                                    <div className="dashboard-panel-header">

                                        <h2>
                                            Running Scans
                                        </h2>

                                        <button className="panel-view-all">
                                            View All
                                        </button>

                                    </div>


                                    <div className="running-scans-list">

                                        {runningScans.map((scan) => (

                                            <div
                                                className="running-scan"
                                                key={scan.name}
                                            >

                                                <div
                                                    className="running-progress"
                                                    style={{
                                                        "--progress":
                                                            `${scan.progress * 3.6}deg`
                                                    }}
                                                >
                                                    <span>
                                                        {scan.progress}%
                                                    </span>
                                                </div>


                                                <div className="running-info">

                                                    <strong>
                                                        {scan.name}
                                                    </strong>

                                                    <span>
                                                        {scan.target}
                                                    </span>

                                                </div>


                                                <div className="running-time">

                                                    <b>
                                                        Running
                                                    </b>

                                                    <span>
                                                        {scan.time}
                                                    </span>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                </div>


                                {/* =================================
                                    TOP VULNERABILITIES
                                ================================= */}

                                <div className="dashboard-panel top-vulnerabilities-panel">

                                    <div className="dashboard-panel-header">

                                        <h2>
                                            Top Vulnerabilities
                                        </h2>

                                        <button className="panel-view-all">
                                            View All
                                        </button>

                                    </div>


                                    <div className="vulnerability-table">

                                        <div className="table-head">
                                            <span>VULNERABILITY</span>
                                            <span>SEVERITY</span>
                                            <span>ASSETS</span>
                                            <span>FOUND</span>
                                        </div>


                                        {vulnerabilities.map((item) => (

                                            <div
                                                className="table-row"
                                                key={item.name}
                                            >

                                                <span className="vulnerability-name">
                                                    ◉ &nbsp; {item.name}
                                                </span>

                                                <span
                                                    className={`severity-badge ${item.severity.toLowerCase()}`}
                                                >
                                                    {item.severity}
                                                </span>

                                                <span>
                                                    {item.assets}
                                                </span>

                                                <span>
                                                    {item.found}
                                                </span>

                                            </div>

                                        ))}

                                    </div>

                                </div>


                                {/* =================================
                                    ASSETS BY TYPE
                                ================================= */}

                                <div className="dashboard-panel asset-type-panel">

                                    <div className="dashboard-panel-header">

                                        <h2>
                                            Assets by Type
                                        </h2>

                                    </div>


                                    <div className="asset-type-content">

                                        <div className="asset-donut">

                                            <div>
                                                <strong>
                                                    128
                                                </strong>

                                                <span>
                                                    Total
                                                </span>
                                            </div>

                                        </div>


                                        <div className="asset-type-list">

                                            <div>
                                                <i className="asset-web" />
                                                <span>Web Applications</span>
                                                <strong>42</strong>
                                                <small>32.8%</small>
                                            </div>

                                            <div>
                                                <i className="asset-server" />
                                                <span>Servers</span>
                                                <strong>32</strong>
                                                <small>25.0%</small>
                                            </div>

                                            <div>
                                                <i className="asset-network" />
                                                <span>Networks</span>
                                                <strong>21</strong>
                                                <small>16.4%</small>
                                            </div>

                                            <div>
                                                <i className="asset-cloud" />
                                                <span>Cloud Assets</span>
                                                <strong>18</strong>
                                                <small>14.1%</small>
                                            </div>

                                            <div>
                                                <i className="asset-other" />
                                                <span>Others</span>
                                                <strong>15</strong>
                                                <small>11.7%</small>
                                            </div>

                                        </div>

                                    </div>


                                    <button className="panel-link">
                                        View All Assets →
                                    </button>

                                </div>


                                {/* =================================
                                    RECENT ACTIVITY
                                ================================= */}

                                <div className="dashboard-panel recent-activity-panel">

                                    <div className="dashboard-panel-header">

                                        <h2>
                                            Recent Activity
                                        </h2>

                                        <button className="panel-view-all">
                                            View All
                                        </button>

                                    </div>


                                    <div className="activity-list">

                                        {recentActivity.map((activity) => (

                                            <div
                                                className="activity-item"
                                                key={activity.title + activity.time}
                                            >

                                                <div
                                                    className={`activity-icon ${activity.type}`}
                                                >
                                                    {activity.icon}
                                                </div>


                                                <div className="activity-info">

                                                    <strong>
                                                        {activity.title}
                                                    </strong>

                                                    <span>
                                                        {activity.description}
                                                    </span>

                                                </div>


                                                <time>
                                                    {activity.time}
                                                </time>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            </div>


                            {/* =================================
                                QUICK ACTIONS
                            ================================= */}

                            <div className="quick-actions-section">

                                <h2>
                                    Quick Actions
                                </h2>


                                <div className="quick-actions-grid">

                                    <button
                                        onClick={() => setActivePage("scans")}
                                    >
                                        <span>◉</span>

                                        <div>
                                            <strong>New Scan</strong>
                                            <small>Start a new scan</small>
                                        </div>

                                        <b>›</b>
                                    </button>


                                    <button
                                        onClick={() => setActivePage("assets")}
                                    >
                                        <span>▣</span>

                                        <div>
                                            <strong>Add Asset</strong>
                                            <small>Add a new asset</small>
                                        </div>

                                        <b>›</b>
                                    </button>


                                    <button>
                                        <span>▤</span>

                                        <div>
                                            <strong>Generate Report</strong>
                                            <small>Create a report</small>
                                        </div>

                                        <b>›</b>
                                    </button>


                                    <button>
                                        <span>⚙</span>

                                        <div>
                                            <strong>Automation</strong>
                                            <small>Create workflow</small>
                                        </div>

                                        <b>›</b>
                                    </button>


                                    <button>
                                        <span>◈</span>

                                        <div>
                                            <strong>Threat Lookup</strong>
                                            <small>Search intelligence</small>
                                        </div>

                                        <b>›</b>
                                    </button>

                                </div>

                            </div>

                        </section>

                    </>

                )}

            </main>

        </div>
    );
};

export default Dashboard;