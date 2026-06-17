import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AdminLayout = () => {

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh"
      }}
    >

      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >

        <Header />

        <main
          style={{
            flex: 1,
            padding: "25px",
            background: "#EEF2FF"
          }}
        >

          <Outlet />

        </main>

        <Footer />

      </div>

    </div>

  );

};

export default AdminLayout;