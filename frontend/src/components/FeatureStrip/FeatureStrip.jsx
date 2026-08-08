import "./FeatureStrip.css";

export default function FeatureStrip() {
  const items = [
    { icon: "⚡", title: "Continuous Monitoring" },
    { icon: "🎯", title: "AI Detection" },
    { icon: "🛡", title: "Enterprise Security" },
    { icon: "📊", title: "Analytics" },
  ];

  return (
    <section className="feature-strip">

      <div className="feature-strip-container">

        {items.map((item, index) => (
          <div className="feature-strip-card" key={index}>

            <div className="feature-strip-icon">
              {item.icon}
            </div>

            <span>{item.title}</span>

          </div>
        ))}

      </div>

    </section>
  );
}