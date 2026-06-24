const BASE_URL = import.meta.env.VITE_API_URL;

const getToken = () => localStorage.getItem("token");

const request = async (endpoint, options = {}) => {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw error || new Error("Erro na requisição");
  }

  return response.json();
};

const api = {
  get: (url) => request(url, { method: "GET" }),
  post: (url, data) =>
    request(url, { method: "POST", body: JSON.stringify(data) }),
  put: (url, data) =>
    request(url, { method: "PUT", body: JSON.stringify(data) }),
  delete: (url) => request(url, { method: "DELETE" }),
};

export default api;