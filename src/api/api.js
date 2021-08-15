import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setAuthToken = (token) => {
  try {
    api.defaults.headers["Authorization"] = token;
    localStorage.setItem("token", token);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteAuthToken = (token) => {
  try {
    delete api.defaults.headers["Authorization"];
    localStorage.removeItem("token");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAuthToken = () => {
  try {
    return localStorage.getItem("token");
  } catch (error) {
    return null;
  }
};

const token = getAuthToken();
if (token) {
  api.defaults.headers.Authorization = token;
}
