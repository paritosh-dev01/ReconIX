import "./Assets.css";

function Assets() {
  return (
    <div className="assets-page">

      <div className="assets-header">
        <div>
          <h1>Assets</h1>
          <p>Manage and monitor your organization's digital assets.</p>
        </div>

        <button className="assets-add-btn">
          + Add Asset
        </button>
      </div>

      <div className="assets-toolbar">

        <div className="assets-search">
          🔍
          <input
            type="text"
            placeholder="Search assets..."
          />
        </div>

        <select className="assets-filter">
          <option>All Types</option>
          <option>Web Application</option>
          <option>Server</option>
          <option>Network</option>
          <option>Cloud</option>
        </select>

        <select className="assets-filter">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>At Risk</option>
        </select>

      </div>

      <div className="assets-table-card">

        <div className="assets-table-header">
          <span>Asset</span>
          <span>Type</span>
          <span>Status</span>
          <span>Risk</span>
          <span>Last Scan</span>
          <span>Action</span>
        </div>

        <div className="asset-row">
          <div>
            <strong>example.com</strong>
            <small>Web Application</small>
          </div>

          <span>Web Application</span>

          <span className="asset-status active">
            Active
          </span>

          <span className="asset-risk medium">
            Medium
          </span>

          <span>2 hours ago</span>

          <button className="asset-view-btn">
            View
          </button>
        </div>

        <div className="asset-row">
          <div>
            <strong>server-02.reconix.com</strong>
            <small>192.168.1.20</small>
          </div>

          <span>Server</span>

          <span className="asset-status active">
            Active
          </span>

          <span className="asset-risk high">
            High
          </span>

          <span>5 hours ago</span>

          <button className="asset-view-btn">
            View
          </button>
        </div>

        <div className="asset-row">
          <div>
            <strong>api.example.com</strong>
            <small>API Endpoint</small>
          </div>

          <span>Web Application</span>

          <span className="asset-status active">
            Active
          </span>

          <span className="asset-risk low">
            Low
          </span>

          <span>1 day ago</span>

          <button className="asset-view-btn">
            View
          </button>
        </div>

      </div>

    </div>
  );
}

export default Assets;