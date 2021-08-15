import { createSelector } from "@reduxjs/toolkit";

export const getUser = (state) => state.user;
export const getUserInfo = createSelector(getUser, (user) => user.info);
export const isLogged = createSelector(getUser, (user) => !!user.info);
export const getUserLoading = createSelector(getUser, (user) => user.loading);
