import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducer from "./reducers";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: reducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
