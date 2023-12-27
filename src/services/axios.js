import axios from "axios";

const axios_hotels = axios.create(
);

axios_hotels.interceptors.request.use((config) => {
  config.headers = {
    "app-type": "ch",
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return config;
});

export { axios_hotels };
