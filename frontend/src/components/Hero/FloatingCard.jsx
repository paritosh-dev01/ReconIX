export default function FloatingCard({
  title,
  value,
  className
}) {

  return (

    <div className={`floating-card ${className}`}>

      <div className="card-title">
        {title}
      </div>

      <div className="card-value">
        {value}
      </div>

    </div>

  );

}