import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Header.module.scss";

import HamburgerButton from "../UI/Buttons/HamburgerButton";
import ProfileButton from "../Profile/ProfileButton";

import { logout } from "../../actions/userActions";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Link to="/" className={style.logo}>
        <img src="/images/logo.webp" alt="Logo of the website" />
        <h1>Your Specialist</h1>
      </Link>
      <div className={style.navigation}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={style.active}>
              Főoldal
            </NavLink>
          </li>
          <li>
            <NavLink to="/providers" activeClassName={style.active}>
              Szakemberek
            </NavLink>
          </li>
          <li>
            <NavLink to="/offer" activeClassName={style.active}>
              Ajánlatkérés
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={style.active}>
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
      <div className={style["hamburger-btn"]}>
        <HamburgerButton
          isMenuOpen={isMenuOpen}
          onToggleMenu={toggleMenuHandler}
        />
      </div>
    </header>
  );
};

export default Header;
