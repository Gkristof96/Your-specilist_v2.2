import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLogOutOutline, IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import style from "./ProfileButton.module.scss";

const ProfileButton = ({ userInfo, logoutHandler }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div
      className={style["profile-button"]}
      onClick={() => setDropdownOpen(!isDropdownOpen)}
    >
      <div className={style.button}>
        <img src={userInfo.image} alt={userInfo.name} />
        <span>{userInfo.name}</span>
        {isDropdownOpen ? (
          <IoIosArrowUp className="icon" />
        ) : (
          <IoIosArrowDown className="icon" />
        )}
      </div>
      <div className={`${style.dropdown} ${isDropdownOpen && style.open}`}>
        <Link to="/profile">
          Profil
          <IoPersonSharp className={style.icon} />
        </Link>
        <span onClick={() => logoutHandler()}>
          Kijelentkezés
          <IoLogOutOutline className={style.icon} />
        </span>
      </div>
    </div>
  );
};

export default ProfileButton;
