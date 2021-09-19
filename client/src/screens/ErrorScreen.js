import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import style from "./ErrorScreen.module.scss";

import Button from "../components/UI/Buttons/Button";
import Card from "../components/UI/Card";
import ImageBackground from "../components/UI/ImageBackground";

const ErrorScreen = () => {
  const history = useHistory();

  const routeRedirectHandler = () => {
    history.replace("/");
  };

  return (
    <Fragment>
      <ImageBackground className="small-bg" />
      <Card>
        <div className={style.leftbar}>
          <h1>Hoppá! Úgy tűnik valami hiba történt.</h1>
          <span>404</span>
          <p>
            Néha a dolgok elromlanak, vagy egy nemlétező dolgot keresel, kérünk
            töltsd be újra amit szeretnél, vagy térj vissza a főoldalra.
          </p>
          <Button onClick={routeRedirectHandler}>Főoldalra</Button>
        </div>
        <div className={style.rightbar}>
          <img src="/images/error.svg" alt="404" />
        </div>
      </Card>
    </Fragment>
  );
};

export default ErrorScreen;
