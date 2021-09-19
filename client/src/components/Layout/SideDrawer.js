import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import style from "./SideDrawer.module.scss";

const SideDrawer = (props) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const closeDrawerHandler = () => {
    props.onToggleDrawer()
  }
  return (
    <ul
      className={`${style['side-drawer']} ${props.isDrawerOpen && style.open}`}
      onClick={closeDrawerHandler}
    >
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

export default SideDrawer;
