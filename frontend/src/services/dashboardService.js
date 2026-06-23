import api from "./api";

const dashboardService = {

  getStats: () =>
    api.get("/dashboard/stats"),

  getOverview: () =>
    api.get("/dashboard/overview")

};

export default dashboardService;