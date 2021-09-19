import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLogOutOutline, IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import classes from "./ProfileButton.module.scss";

const ProfileButton = ({ userInfo, logoutHandler }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div
      className={classes["profile-button"]}
      onClick={() => setDropdownOpen(!isDropdownOpen)}
    >
      <div className={classes.button}>
        <img src={userInfo.image} alt={userInfo.name} />
        <span>{userInfo.name}</span>
        {isDropdownOpen ? (
          <IoIosArrowUp className="icon" />
        ) : (
          <IoIosArrowDown className="icon" />
        )}
      </div>
      <div className={`${classes.dropdown} ${isDropdownOpen && classes.open}`}>
        <Link to="/profile">
          Profil
          <IoPersonSharp className={classes.icon} />
        </Link>
        <span onClick={() => logoutHandler()}>
          Kijelentkezés
          <IoLogOutOutline className={classes.icon} />
        </span>
      </div>
    </div>
  );
};

export default ProfileButton;
