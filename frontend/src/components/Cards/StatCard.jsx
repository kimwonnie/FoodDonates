const StatCard = ({
  title,
  value,
  color,
  icon,
  description
}) => {

  return (

    <div
      className="stat-card"
      style={{
        borderLeft: `5px solid ${color}`
      }}
    >

      {icon && (

        <div className="stat-icon">
          {icon}
        </div>

      )}

      <h4>{title}</h4>

      <h2>{value}</h2>

      {description && (

        <small>
          {description}
        </small>

      )}

    </div>

  );

};

export default StatCard;