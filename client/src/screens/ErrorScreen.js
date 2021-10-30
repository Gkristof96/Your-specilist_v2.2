import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import classes from "./ErrorScreen.module.css";

import Button from "../components/UI/Buttons/Button";
import ScreenContent from "../components/UI/ScreenContent";
import ScreenHeader from "../components/UI/ScreenHeader";

const ErrorScreen = () => {
  const history = useHistory();

  const routeRedirectHandler = () => {
    history.replace("/");
  };

  return (
    <Fragment>
      <ScreenHeader className='small-bg' />
      <ScreenContent>
        <div className={classes.leftbar}>
          <h1>Hoppá! Úgy tűnik valami hiba történt.</h1>
          <span>404</span>
          <p>
            Néha a dolgok elromlanak, vagy egy nemlétező dolgot keresel, kérünk
            töltsd be újra amit szeretnél, vagy térj vissza a főoldalra.
          </p>
          <Button onClick={routeRedirectHandler}>Főoldalra</Button>
        </div>
        <div className={classes.rightbar}>
          <img src='/images/error.svg' alt='404' />
        </div>
      </ScreenContent>
    </Fragment>
  );
};

export default ErrorScreen;
