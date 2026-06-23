import api from "./api";

const deliveryService = {

  getAll: () =>
    api.get("/deliveries"),

  create: (data) =>
    api.post("/deliveries", data),

  updateStatus: (id, status) =>
    api.put(`/deliveries/${id}/status`, { status })

};

export default deliveryService;