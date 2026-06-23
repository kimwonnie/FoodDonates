import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const DashboardLayout = () => {

  return (

    <div className="layout-container">

      <Sidebar />

      <div className="layout-content">

        <Header />

        <main className="layout-main">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>

  );

};

export default DashboardLayout;