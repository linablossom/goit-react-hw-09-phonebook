import React, { useCallback } from "react";
import Register from "../components/Register";
import { register } from "../redux/services/userApiService";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/Loading";
import { getUserLoading } from "../redux/selectors/userSelectors";

const RegisterView = () => {
  const loading = useSelector(getUserLoading);
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    (email, name, password) => {
      dispatch(register(email, name, password));
    },
    [dispatch]
  );
  if (loading) return <Loading>Loading...</Loading>;
  return <Register handleSubmit={handleSubmit} />;
};

export default RegisterView;
