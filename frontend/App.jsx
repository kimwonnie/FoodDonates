import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

// estilos globais
import "./styles/globals.css";
import "./styles/forms.css";
import "./styles/tables.css";
import "./styles/dashboard.css";
import "./styles/errors.css";

const App = () => {

  return (

    <AuthProvider>

      <BrowserRouter>

        <AppRoutes />

      </BrowserRouter>

    </AuthProvider>

  );

};

export default App;