import api from "./api";

const authService = {

  login: (data) =>
    api.post("/auth/login", data),

  register: (data) =>
    api.post("/auth/register", data),

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
  }

};

export default authService;