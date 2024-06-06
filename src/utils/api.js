import axios from "axios";
import Qs from "qs";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const fetchOptions = (cookies) => {
  return {
    credentials: "include",
    headers: { Cookie: cookies().toString() },
  };
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = (data) => {
  return api.post("/login", data);
};

export const register = (data) => {
  return api.post("/signup", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const logout = () => {
  return api.delete("/logout");
};

export function getCurrentUser() {
  return api.get("/current_user");
}

export const updateCurrentUser = (data) => {
  return api.patch(`/signup`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePassword = (data) => {
  return api.patch(`/current_user/change_password`, data);
};