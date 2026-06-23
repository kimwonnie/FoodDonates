import { Route } from "react-router-dom";

import AdminLayout from "../layout/AdminLayout";
import RoleRoutes from "./RoleRoutes";

import DashboardAdmin from "../pages/admin/DashboardAdmin";
import Logs from "../pages/admin/Logs";
import Monitoramento from "../pages/admin/Monitoramento";
import Configuracoes from "../pages/admin/Configuracoes";

const AdminRoutes = () => {

  return (

    <Route
      element={
        <RoleRoutes allowedRoles={["ADMIN"]}>
          <AdminLayout />
        </RoleRoutes>
      }
    >

      <Route path="/admin" element={<DashboardAdmin />} />

      <Route path="/logs" element={<Logs />} />

      <Route path="/monitoramento" element={<Monitoramento />} />

      <Route path="/configuracoes" element={<Configuracoes />} />

    </Route>

  );

};

export default AdminRoutes;