import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useApi = () => {

  const { user } = useContext(AuthContext);

  const request = async (url, options = {}) => {

    const headers = {
      "Content-Type": "application/json",
      ...(user?.token && {
        Authorization: `Bearer ${user.token}`
      }),
      ...options.headers
    };

    const response = await fetch(url, {
      ...options,
      headers
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    return response.json();

  };

  return {
    get: (url) =>
      request(url, { method: "GET" }),

    post: (url, data) =>
      request(url, {
        method: "POST",
        body: JSON.stringify(data)
      }),

    put: (url, data) =>
      request(url, {
        method: "PUT",
        body: JSON.stringify(data)
      }),

    delete: (url) =>
      request(url, { method: "DELETE" })
  };

};

export default useApi;