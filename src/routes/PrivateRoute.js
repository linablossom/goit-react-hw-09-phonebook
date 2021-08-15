import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isLogged } from "../redux/selectors/userSelectors";

const PrivateRoute = ({ isLogged, component, ...props }) => {
  return (
    <Route
      {...props}
      component={isLogged ? component : () => <Redirect to={"/login"} />}
    />
  );
};

const mapStateToProps = (state) => ({
  isLogged: isLogged(state),
});

export default connect(mapStateToProps)(PrivateRoute);
