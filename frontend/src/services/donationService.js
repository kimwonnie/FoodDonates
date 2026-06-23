import api from "./api";

const donationService = {

  getAll: () =>
    api.get("/donations"),

  create: (data) =>
    api.post("/donations", data),

  getStats: () =>
    api.get("/donations/stats")

};

export default donationService;