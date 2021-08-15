import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import RegisterView from "../views/RegisterView";
// import LoginView from "../views/LoginView";
// import ContactsView from "../views/ContactsView";

const RegisterView = React.lazy(() => import("../views/RegisterView"));
const LoginView = React.lazy(() => import("../views/LoginView"));
const ContactsView = React.lazy(() => import("../views/ContactsView"));

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <PrivateRoute path="/contacts" component={ContactsView} />
      </Switch>
    </>
  );
};

export default Routes;
