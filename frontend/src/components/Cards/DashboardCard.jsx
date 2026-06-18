import "./DashboardCard.css";

const DashboardCard = ({
  title,
  value,
  icon,
  subtitle
}) => {

  return (

    <div className="dashboard-card">

      <div className="card-header">

        <span>{title}</span>

        <div className="card-icon">
          {icon}
        </div>

      </div>

      <h2>{value}</h2>

      {subtitle && (

        <small className="card-subtitle">
          {subtitle}
        </small>

      )}

    </div>

  );

};

export default DashboardCard;