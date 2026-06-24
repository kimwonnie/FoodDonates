import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CONTEXTO
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ======================================
  // CARREGAR USUÁRIO DO LOCALSTORAGE
  // ======================================
  useEffect(() => {

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    if (token && role && name) {
      setUser({ token, role, name });
    }

    setLoading(false);

  }, []);

  // ======================================
  // LOGIN
  // ======================================
  const login = (data) => {

    const { token, role, name } = data;

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("name", name);

    setUser({ token, role, name });

    navigate("/dashboard");

  };

  // ======================================
  // LOGOUT
  // ======================================
  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");

    setUser(null);

    navigate("/login");

  };

  // STATUS DE AUTENTICAÇÃO
  const isAuthenticated = !!user?.token;

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      isAuthenticated,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};