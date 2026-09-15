import { useMemo, useState } from "react";
import "./Assets.css";

const initialAssets = [
  {
    id: 1,
    icon: "◉",
    name: "example.com",
    description: "Primary domain",
    type: "Domain",
    status: "Active",
    ip: "93.184.216.34",
    technologies: ["Cloudflare", "Nginx", "+1"],
    risk: "Medium",
    lastScan: "2 hours ago",
  },
  {
    id: 2,
    icon: "⌘",
    name: "api.example.com",
    description: "API subdomain",
    type: "Subdomain",
    status: "Active",
    ip: "93.184.216.34",
    technologies: ["Node.js", "Express", "+1"],
    risk: "High",
    lastScan: "5 hours ago",
  },
  {
    id: 3,
    icon: "⌘",
    name: "app.example.com",
    description: "Application subdomain",
    type: "Subdomain",
    status: "Active",
    ip: "93.184.216.35",
    technologies: ["React", "Nginx", "+1"],
    risk: "Medium",
    lastScan: "8 hours ago",
  },
  {
    id: 4,
    icon: "▣",
    name: "192.168.1.20",
    description: "Internal host",
    type: "IP Address",
    status: "Active",
    ip: "192.168.1.20",
    technologies: ["SSH", "Apache", "+1"],
    risk: "Low",
    lastScan: "1 day ago",
  },
  {
    id: 5,
    icon: "↗",
    name: "https://example.com/api",
    description: "API endpoint",
    type: "URL",
    status: "Active",
    ip: "93.184.216.34",
    technologies: ["REST API", "Nginx"],
    risk: "Medium",
    lastScan: "1 day ago",
  },
  {
    id: 6,
    icon: "◉",
    name: "mail.example.com",
    description: "Mail subdomain",
    type: "Subdomain",
    status: "Inactive",
    ip: "93.184.216.35",
    technologies: ["Postfix", "Linux", "+1"],
    risk: "Low",
    lastScan: "2 days ago",
  },
];

function Assets() {
  const [assets, setAssets] = useState(initialAssets);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);

  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => {
      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        asset.name.toLowerCase().includes(query) ||
        asset.description.toLowerCase().includes(query) ||
        asset.type.toLowerCase().includes(query) ||
        asset.ip.toLowerCase().includes(query) ||
        asset.technologies.join(" ").toLowerCase().includes(query);

      const matchesType =
        typeFilter === "All Types" || asset.type === typeFilter;

      const matchesStatus =
        statusFilter === "All Status" || asset.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [assets, search, typeFilter, statusFilter]);

  const handleRefresh = () => {
    setAssets([...initialAssets]);
    setSearch("");
    setTypeFilter("All Types");
    setStatusFilter("All Status");
    setCurrentPage(1);
    setOpenMenu(null);
  };

  const handleView = (asset) => {
    window.alert(`Opening asset: ${asset.name}`);
  };

  const handleMore = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="assets-page">
      {/* ================= PAGE HEADER ================= */}

      <section className="assets-page-header">
        <div className="assets-title-wrap">
          <div className="assets-title-icon">◎</div>

          <div>
            <h1>Asset Explorer</h1>
            <p>
              Discover, monitor and investigate your digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}

      <section className="assets-stat-grid">
        <div className="asset-stat-card">
          <div className="asset-stat-icon purple">▤</div>
          <div>
            <span>Total Assets</span>
            <strong>128</strong>
            <small>↑ 12% from last scan</small>
          </div>
        </div>

        <div className="asset-stat-card">
          <div className="asset-stat-icon cyan">◎</div>
          <div>
            <span>Domains</span>
            <strong>18</strong>
            <small>↑ 6% from last scan</small>
          </div>
        </div>

        <div className="asset-stat-card">
          <div className="asset-stat-icon purple">⌘</div>
          <div>
            <span>Subdomains</span>
            <strong>37</strong>
            <small>↑ 18% from last scan</small>
          </div>
        </div>

        <div className="asset-stat-card">
          <div className="asset-stat-icon purple">▣</div>
          <div>
            <span>Live Hosts</span>
            <strong>84</strong>
            <small>↑ 15% from last scan</small>
          </div>
        </div>

        <div className="asset-stat-card">
          <div className="asset-stat-icon purple">⌘</div>
          <div>
            <span>Open Ports</span>
            <strong>142</strong>
            <small>↑ 22% from last scan</small>
          </div>
        </div>
      </section>

      {/* ================= MAIN EXPLORER ================= */}

      <section className="assets-explorer-card">
        {/* Panel header */}

        <div className="assets-explorer-header">
          <div className="assets-explorer-title">
            <div className="assets-layer-icon">▱</div>

            <div>
              <h2>All Assets</h2>
              <p>
                Browse and investigate assets discovered across your attack
                surface.
              </p>
            </div>
          </div>

          <div className="assets-updated">
            <span>◷</span>
            Last Updated: 2 hours ago
          </div>
        </div>

        {/* ================= FILTER BAR ================= */}

        <div className="assets-filter-bar">
          <div className="assets-search-box">
            <span>⌕</span>

            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search assets..."
            />
          </div>

          <select
            value={typeFilter}
            onChange={(e) => {
              setTypeFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option>All Types</option>
            <option>Domain</option>
            <option>Subdomain</option>
            <option>IP Address</option>
            <option>URL</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button
            type="button"
            className="assets-refresh-btn"
            onClick={handleRefresh}
          >
            <span>⟳</span>
            Refresh
          </button>
        </div>

        {/* ================= TABLE ================= */}

        <div className="assets-table-wrapper">
          <div className="assets-table">
            {/* Header */}

            <div className="assets-table-head">
              <span>ASSET</span>
              <span>TYPE</span>
              <span>STATUS</span>
              <span>IP ADDRESS</span>
              <span>TECHNOLOGIES</span>
              <span>RISK</span>
              <span>LAST SCAN</span>
              <span>ACTION</span>
            </div>

            {/* Rows */}

            {filteredAssets.length > 0 ? (
              filteredAssets.map((asset) => (
                <div className="assets-table-row" key={asset.id}>
                  {/* Asset */}

                  <div className="asset-name-cell">
                    <div className="asset-row-icon">{asset.icon}</div>

                    <div>
                      <strong>{asset.name}</strong>
                      <small>{asset.description}</small>
                    </div>
                  </div>

                  {/* Type */}

                  <div>
                    <span
                      className={`asset-type-badge ${asset.type
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {asset.type}
                    </span>
                  </div>

                  {/* Status */}

                  <div>
                    <span
                      className={`asset-status-badge ${asset.status.toLowerCase()}`}
                    >
                      {asset.status}
                    </span>
                  </div>

                  {/* IP */}

                  <span className="asset-ip">{asset.ip}</span>

                  {/* Technologies */}

                  <div className="asset-tech-list">
                    {asset.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>

                  {/* Risk */}

                  <div>
                    <span
                      className={`asset-risk-badge ${asset.risk.toLowerCase()}`}
                    >
                      {asset.risk}
                    </span>
                  </div>

                  {/* Last Scan */}

                  <span className="asset-last-scan">
                    {asset.lastScan}
                  </span>

                  {/* Actions */}

                  <div className="asset-actions">
                    <button
                      type="button"
                      className="asset-view-btn"
                      onClick={() => handleView(asset)}
                    >
                      View
                    </button>

                    <div className="asset-more-wrap">
                      <button
                        type="button"
                        className="asset-more-btn"
                        onClick={() => handleMore(asset.id)}
                      >
                        ⋮
                      </button>

                      {openMenu === asset.id && (
                        <div className="asset-more-menu">
                          <button type="button">View Details</button>
                          <button type="button">Run Scan</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="assets-empty-state">
                <div>⌕</div>
                <h3>No assets found</h3>
                <p>
                  Try changing your search or filter settings.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="assets-table-footer">
          <span>
            Showing {filteredAssets.length} of 128 assets
          </span>

          <div className="assets-pagination">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((page) => Math.max(1, page - 1))
              }
            >
              ‹
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                type="button"
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(5, page + 1))
              }
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Assets;