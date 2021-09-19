import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { backdrop } from "./AuthScreen.module.scss";

import ImageBackground from "../components/UI/ImageBackground";
import LoginCard from "../components/Authentication/LoginCard";
import RegisterCard from "../components/Authentication/RegisterCard";

const AuthScreen = () => {
  return (
    <Fragment>
      <ImageBackground className="fullsize-bg" />
      <div className={backdrop} />
      <Switch>
        <Route path="/auth" exact>
          <Redirect to="/auth/login" />
        </Route>
        <Route path="/auth/login">
          <LoginCard />
        </Route>
        <Route path="/auth/signup">
          <RegisterCard />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default AuthScreen;
