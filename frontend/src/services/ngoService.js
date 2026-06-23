import api from "./api";

const ngoService = {

  getAll: () =>
    api.get("/ngos"),

  create: (data) =>
    api.post("/ngos", data),

  update: (id, data) =>
    api.put(`/ngos/${id}`, data),

  delete: (id) =>
    api.delete(`/ngos/${id}`)

};

export default ngoService;