import React, { useCallback } from "react";
import Login from "../components/Login";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/services/userApiService";
import Loading from "../components/Loading";
import { getUserLoading } from "../redux/selectors/userSelectors";

const LoginView = () => {
  const loading = useSelector(getUserLoading);
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    (email, password) => {
      dispatch(login(email, password));
    },
    [dispatch]
  );
  if (loading) return <Loading>Loading...</Loading>;
  return <Login handleSubmit={handleSubmit} />;
};

export default LoginView;
