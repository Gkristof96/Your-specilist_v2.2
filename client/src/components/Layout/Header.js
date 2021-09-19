import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.scss";

import HamburgerButton from "../UI/Buttons/HamburgerButton";
import ProfileButton from "../Profile/ProfileButton";

import { logout } from "../../actions/userActions";

const Header = (props) => {

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className={`${props.isDrawerOpen && classes.open}`}>
      <Link to="/" className={classes.logo}>
        <img src="/images/logo.webp" alt="Logo of the website" />
        <h1>Your Specialist</h1>
      </Link>
      <div className={classes.navigation}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={classes.active}>
              Főoldal
            </NavLink>
          </li>
          <li>
            <NavLink to="/providers" activeClassName={classes.active}>
              Szakemberek
            </NavLink>
          </li>
          <li>
            <NavLink to="/offer" activeClassName={classes.active}>
              Ajánlatkérés
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={classes.active}>
              Kapcsolat
            </NavLink>
          </li>
          {userInfo ? (
            <ProfileButton userInfo={userInfo} logoutHandler={logoutHandler} />
          ) : (
            <li>
              <Link to="/auth">Bejelenkezés</Link>
            </li>
          )}
        </ul>
      </div>
      <div className={classes["hamburger-btn"]}>
        <HamburgerButton
          isDrawerOpen={props.isDrawerOpen}
          onToggleDrawer={props.onToggleDrawer}
        />
      </div>
    </header>
  );
};

export default Header;
