import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./EditPageNavigation.module.scss";

const EditPageNavigation = () => {
  return (
    <Fragment>
      <NavLink
        to="/profile/edit/personal"
        activeClassName={style.active}
        className={style["link-btn"]}
      >
        Profil beállítása
      </NavLink>
      <NavLink
        to="/profile/edit/professions"
        activeClassName={style.active}
        className={style["link-btn"]}
      >
        Szakmai adatok
      </NavLink>
      {/*<NavLink 
          
          to='/profile/edit/gallery'
          activeClassName={style.active} className={style['link-btn']}
  >Galléria feltöltése</NavLink>*/}
      <NavLink
        to="/profile/edit/password"
        activeClassName={style.active}
        className={style["link-btn"]}
      >
        Jelszó csere
      </NavLink>
      {/*<NavLink 
          to='/profile/edit/removal'
          activeClassName={style.active} className={style['link-btn']}
      >Felhasználó törlése</NavLink>*/}
      <Link to="/profile" className={style["link-btn"]}>
        Vissza a profilodhoz
      </Link>
    </Fragment>
  );
};

export default EditPageNavigation;
