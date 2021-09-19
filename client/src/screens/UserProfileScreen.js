import { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  FaCog,
  FaBriefcase,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import style from "./UserProfileScreen.module.scss";

import Loader from "../components/UI/Loader";
import IconButton from "../components/UI/Buttons/IconButton";
import ButtonContainer from "../components/Profile/ButtonContainer";
import Message from "../components/UI/Message";
import ImageBackground from "../components/UI/ImageBackground";
import Card from "../components/UI/Card";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Description from "../components/Profile/Description";
import Gallery from "../components/Profile/Gallery";

import { logout } from "../actions/userActions";
import { getUserData } from "../actions/userActions";

const UserProfileScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userDetail);
  const { loading, error, provider } = userDetail;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getUserData(userInfo._id));
    }
  }, [dispatch, userInfo, history]);

  const redirectToEditHandler = () => {
    history.push("/profile/edit");
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Fragment>
      <ImageBackground className="medium-bg" />
      <Card alignment="vertical" padding="medium-padding">
        {error && <Message message={error} type="error" />}
        {loading ? (
          <Loader size="large" />
        ) : (
          <Fragment>
            <ProfileHeader provider={provider} />
            <ButtonContainer>
              <IconButton buttonText="Hamarosan!">
                <FaBriefcase className={style.icon} />
              </IconButton>
              <IconButton buttonText="Hamarosan!">
                <FaCommentDots className={style.icon} />
              </IconButton>
              <IconButton
                buttonText="Beállítások"
                onClick={redirectToEditHandler}
              >
                <FaCog className={style.icon} />
              </IconButton>
              <IconButton buttonText="Kijelentkezés" onClick={logoutHandler}>
                <FaSignOutAlt className={style.icon} />
              </IconButton>
            </ButtonContainer>
            <Description bio={provider.bio} userComponent />
            <Gallery gallery={provider.gallery} userComponent />
          </Fragment>
        )}
      </Card>
    </Fragment>
  );
};

export default UserProfileScreen;
