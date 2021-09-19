import { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  FaCog,
  FaBriefcase,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import classes from "./UserProfileScreen.module.scss";

import Loader from "../components/UI/Loader";
import IconButton from "../components/UI/Buttons/IconButton";
import ButtonContainer from "../components/Profile/ButtonContainer";
import Message from "../components/UI/Message";
import ScreenHeader from "../components/UI/ScreenHeader";
import ScreenContent from "../components/UI/ScreenContent";
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
      <ScreenHeader className="medium-bg" />
      <ScreenContent alignment="vertical" padding="medium-padding">
        {error && <Message message={error} type="error" />}
        {loading ? (
          <Loader size="large" />
        ) : (
          <Fragment>
            <ProfileHeader provider={provider} />
            <ButtonContainer>
              <IconButton buttonText="Hamarosan!">
                <FaBriefcase className={classes.icon} />
              </IconButton>
              <IconButton buttonText="Hamarosan!">
                <FaCommentDots className={classes.icon} />
              </IconButton>
              <IconButton
                buttonText="Beállítások"
                onClick={redirectToEditHandler}
              >
                <FaCog className={classes.icon} />
              </IconButton>
              <IconButton buttonText="Kijelentkezés" onClick={logoutHandler}>
                <FaSignOutAlt className={classes.icon} />
              </IconButton>
            </ButtonContainer>
            <Description bio={provider.bio} userComponent />
            <Gallery gallery={provider.gallery} userComponent />
          </Fragment>
        )}
      </ScreenContent>
    </Fragment>
  );
};

export default UserProfileScreen;
