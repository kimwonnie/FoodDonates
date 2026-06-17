import "./DashboardCard.css";

const DashboardCard = ({
  title,
  value,
  icon
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

    </div>
  );
};

export default DashboardCard;