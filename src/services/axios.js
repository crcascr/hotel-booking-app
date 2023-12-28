import axios from "axios";

const axios_hotels = axios.create({
  baseURL: "https://api.jsonserver.io",
}
);

axios_hotels.interceptors.request.use((config) => {
  config.headers = {
    "app-type": "ch",
    "X-Jsio-Token":"c914134bcf57b6c350f935d66649a82a",
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return config;
});

export { axios_hotels };
