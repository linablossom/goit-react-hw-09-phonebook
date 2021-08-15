import { api } from "./api";

export const userRegister = async ({ name, email, password }) => {
  try {
    const response = await api.post("/users/signup", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const userLogin = async ({ email, password }) => {
  try {
    const response = await api.post("/users/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const userGetInfo = async () => {
  try {
    const response = await api.get("/users/current");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const userLogout = async () => {
  try {
    const response = await api.post("/users/logout", {});
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
