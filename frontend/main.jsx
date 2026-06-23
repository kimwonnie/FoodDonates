import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// contexto global de autenticação
import { AuthProvider } from "./context/AuthContext";

// estilos globais
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>
      <App />
    </AuthProvider>

  </React.StrictMode>
);