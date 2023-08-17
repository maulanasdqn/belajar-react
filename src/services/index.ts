import axios from "axios";

const configApi = {
  baseURL: "https://jsonplaceholder.typicode.com",
};

export const api = axios.create(configApi);
