import { useSelector } from "react-redux";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { NavLink, Link } from "react-router-dom";
import style from "./SideDrawer.module.scss";

const DrawerOverlay = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <ul className={style["side-drawer"]}>
      <li>
        <NavLink activeClassName={style.active} exact={true} to="/">
          Főoldal
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={style.active} to="/providers">
          Szakemberek
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={style.active} to="/offer">
          Ajánlatkérés
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={style.active} to="/contact">
          Kapcsolat
        </NavLink>
      </li>
      {userInfo ? (
        <li>
          <Link to="/profile">
            <img src={userInfo.image} alt={userInfo.name} />
            <span>{userInfo.name}</span>
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Bejelenkezés</Link>
        </li>
      )}
    </ul>
  );
};

const SideDrawer = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <DrawerOverlay />,
        document.getElementById("sidedrawer-root")
      )}
    </Fragment>
  );
};

export default SideDrawer;
