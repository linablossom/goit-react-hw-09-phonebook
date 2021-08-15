import { createAction } from "@reduxjs/toolkit";

export const userLoginRequest = createAction("user/loginRequest");
export const userLoginSuccess = createAction("user/loginSuccess");
export const userLoginError = createAction("user/loginError");

export const userRegisterRequest = createAction("user/registerRequest");
export const userRegisterSuccess = createAction("user/registerSuccess");
export const userRegisterError = createAction("user/registerError");

export const userLogoutRequest = createAction("user/logoutRequest");
export const userLogoutSuccess = createAction("user/logoutSuccess");
export const userLogoutError = createAction("user/logoutError");

export const userGetInfoRequest = createAction("user/getInfoRequest");
export const userGetInfoSuccess = createAction("user/getInfoSuccess");
export const userGetInfoError = createAction("user/getInfoError");
