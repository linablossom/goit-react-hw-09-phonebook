import { userLogin, userRegister, userLogout, userGetInfo } from "../../api";
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterError,
  userLogoutRequest,
  userLogoutSuccess,
  userLogoutError,
  userGetInfoSuccess,
  userGetInfoRequest,
  userGetInfoError,
} from "../actions/userActions";
import { setAuthToken, deleteAuthToken } from "../../api/api";
import history from "../history";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(userLoginRequest());
    const { token, user } = await userLogin({ email, password });
    setAuthToken(token);
    dispatch(userLoginSuccess(user));
    history.push("/contacts");
  } catch (error) {
    dispatch(userLoginError(error));
  }
};

export const register = (email, name, password) => async (dispatch) => {
  try {
    dispatch(userRegisterRequest());
    const { token, user } = await userRegister({ email, name, password });
    setAuthToken(token);
    dispatch(userRegisterSuccess(user));
    history.push("/contacts");
  } catch (error) {
    dispatch(userRegisterError(error));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(userLogoutRequest());
    await userLogout();
    dispatch(userLogoutSuccess());
    deleteAuthToken();
    history.push("/login");
  } catch (error) {
    dispatch(userLogoutError(error));
  }
};

export const getInfo = () => async (dispatch) => {
  try {
    dispatch(userGetInfoRequest());
    const userInfo = await userGetInfo();
    dispatch(userGetInfoSuccess(userInfo));
    history.push("/contacts");
  } catch (error) {
    dispatch(userGetInfoError());
    deleteAuthToken();
  }
};
