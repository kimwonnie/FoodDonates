import { Link } from "react-router-dom";

const Reports = () => {

  return (

    <div>

      <h1>Central de Relatórios</h1>

      <div className="report-grid">

        <Link to="/reports/donations">
          Relatório de Doações
        </Link>

        <Link to="/reports/deliveries">
          Relatório de Entregas
        </Link>

        <Link to="/reports/families">
          Relatório de Famílias
        </Link>

      </div>

    </div>

  );

};

export default Reports;