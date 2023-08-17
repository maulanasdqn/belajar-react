import axios from "axios";

const configApi = {
  baseURL: import.meta.env.VITE_API_URL,
};

const configMock = {
  baseURL: import.meta.env.VITE_HOST + "/api",
};

export const mock = axios.create(configMock);

export const api = axios.create(configApi);
