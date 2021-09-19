import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import classes from "./SideDrawer.module.scss";

const SideDrawer = (props) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const closeDrawerHandler = () => {
    props.onToggleDrawer()
  }
  return (
    <ul
      className={`${classes['side-drawer']} ${props.isDrawerOpen && classes.open}`}
      onClick={closeDrawerHandler}
    >
      <li>
        <NavLink activeClassName={classes.active} exact={true} to="/">
          Főoldal
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/providers">
          Szakemberek
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/offer">
          Ajánlatkérés
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={classes.active} to="/contact">
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
          <Link to="/auth">Bejelenkezés</Link>
        </li>
      )}
    </ul>
  );
};

export default SideDrawer;
