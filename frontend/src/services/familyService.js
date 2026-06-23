import api from "./api";

const familyService = {

  getAll: () =>
    api.get("/families"),

  create: (data) =>
    api.post("/families", data),

  update: (id, data) =>
    api.put(`/families/${id}`, data),

  delete: (id) =>
    api.delete(`/families/${id}`)

};

export default familyService;