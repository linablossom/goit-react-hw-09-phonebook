import { createReducer, combineReducers } from "@reduxjs/toolkit";
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

const info = createReducer(null, {
  [userLoginSuccess]: (_, { payload }) => payload,
  [userRegisterSuccess]: (_, { payload }) => payload,
  [userGetInfoSuccess]: (_, { payload }) => payload,
  [userLoginError]: () => null,
  [userLogoutRequest]: () => null,
});

const loading = createReducer(false, {
  [userLoginRequest]: () => true,
  [userLoginSuccess]: () => false,
  [userLoginError]: () => false,
  [userRegisterRequest]: () => true,
  [userRegisterSuccess]: () => false,
  [userRegisterError]: () => false,
  [userLogoutRequest]: () => true,
  [userLogoutSuccess]: () => false,
  [userLogoutError]: () => false,
  [userGetInfoRequest]: () => true,
  [userGetInfoSuccess]: () => false,
  [userGetInfoError]: () => false,
});

const error = createReducer(null, {
  [userLoginRequest]: () => null,
  [userLoginError]: (error) => error,
  [userRegisterRequest]: () => null,
  [userRegisterError]: (error) => error,
  [userLogoutRequest]: () => null,
  [userLogoutError]: (error) => error,
  [userGetInfoSuccess]: () => null,
});

export default combineReducers({ info, loading, error });
