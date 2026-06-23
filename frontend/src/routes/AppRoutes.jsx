import { Routes, Route } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import AdminRoutes from "./AdminRoutes";

import DashboardLayout from "../layout/DashboardLayout";
import RoleRoutes from "./RoleRoutes";

import Dashboard from "../pages/dashboard/Dashboard";

import NotFound from "../pages/Errors/NotFound";
import ServerError from "../pages/Errors/ServerError";
import Unauthorized from "../pages/Errors/Unauthorized";

const AppRoutes = () => {

  return (

    <Routes>

      {/* ===================== */}
      {/* AUTH */}
      {/* ===================== */}
      {AuthRoutes()}

      {/* ===================== */}
      {/* USER DASHBOARD */}
      {/* ===================== */}
      <Route
        element={
          <RoleRoutes allowedRoles={["USER", "ADMIN"]}>
            <DashboardLayout />
          </RoleRoutes>
        }
      >

        <Route path="/dashboard" element={<Dashboard />} />

      </Route>

      {/* ===================== */}
      {/* ADMIN */}
      {/* ===================== */}
      {AdminRoutes()}

      {/* ===================== */}
      {/* ERROS */}
      {/* ===================== */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />

    </Routes>

  );

};

export default AppRoutes;