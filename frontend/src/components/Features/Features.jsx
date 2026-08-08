import "./Features.css";

const features = [
  {
    icon: "🌐",
    title: "Asset Discovery",
    desc: "Automatically discover domains, subdomains, IP addresses and exposed internet-facing assets."
  },
  {
    icon: "🛡️",
    title: "Vulnerability Scanning",
    desc: "Identify security weaknesses with automated vulnerability detection and intelligent analysis."
  },
  {
    icon: "🤖",
    title: "AI Analysis",
    desc: "Leverage AI to prioritize risks, analyze findings and provide remediation guidance."
  },
  {
    icon: "📄",
    title: "Professional Reports",
    desc: "Generate clean PDF reports with executive summaries and detailed technical findings."
  },
  {
    icon: "⏱️",
    title: "Scheduled Scans",
    desc: "Run reconnaissance automatically on a schedule and receive continuous monitoring updates."
  }
];

export default function Features() {
  return (
    <section className="features">

      <div className="features-container">

        <h2 className="features-heading">
  Powerful <span>Features</span>
</h2>

        <div className="features-grid">

          {features.map((item, index) => (
            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}