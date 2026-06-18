import "./DashboardCard.css";

const AlertCard = ({
  title,
  message,
  type = "warning"
}) => {

  const alertStyles = {

    warning: {
      icon: "⚠️",
      className: "alert-warning"
    },

    danger: {
      icon: "🚨",
      className: "alert-danger"
    },

    success: {
      icon: "✅",
      className: "alert-success"
    },

    info: {
      icon: "ℹ️",
      className: "alert-info"
    }

  };

  const alert =
    alertStyles[type] ||
    alertStyles.warning;

  return (

    <div
      className={`alert-card ${alert.className}`}
    >

      <div className="alert-icon">

        {alert.icon}

      </div>

      <div className="alert-content">

        <h4>{title}</h4>

        <p>{message}</p>

      </div>

    </div>

  );

};

export default AlertCard;