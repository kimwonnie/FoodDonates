import api from "./api";

const reportService = {

  getAll: () =>
    api.get("/reports"),

  generate: (data) =>
    api.post("/reports/generate", data)

};

export default reportService;