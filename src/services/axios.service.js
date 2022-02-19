import axios from "axios";

export const API_BASE = "https://internship.apps.robotbull.com";

export const axiosInstance = (controller) =>
  axios.create({
    baseURL: `${API_BASE}/${controller}`,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
  });
