import { Fragment, useEffect } from "react";
import {
  useHistory,
  useParams,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { FaAward, FaArrowAltCircleLeft, FaTag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/UI/Loader";
import Message from "../components/UI/Message";
import ScreenHeader from "../components/UI/ScreenHeader";
import ScreenContent from "../components/UI/ScreenContent";

import { listProviderData } from "../actions/providerActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Description from "../components/Profile/Description";
import Gallery from "../components/Profile/Gallery";
import RatingForm from "../components/Profile/RatingForm";
import ButtonContainer from "../components/Profile/ButtonContainer";
import IconButton from "../components/UI/Buttons/IconButton";
import classes from "./ProviderProfileScreen.module.scss";

const ProviderProfilScreen = ({ match }) => {
  let { path, url } = useRouteMatch();
  const param = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const id = param.id;

  const providerData = useSelector((state) => state.providerData);
  const { loading, error, provider } = providerData;

  useEffect(() => {
    if (!provider._id || provider._id !== id) {
      dispatch(listProviderData(id));
    }
  }, [dispatch, id, provider._id]);

  const redirectToRatingHandler = () => {
    history.push(`${url}/rating`);
  };

  const redirectBackHandler = () => {
    history.push(`/provider/${id}`);
  };

  return (
    <Fragment>
      <ScreenHeader className="medium-bg" />
      <ScreenContent padding="medium-padding" alignment="vertical">
        {error && <Message message={error} type="error" />}
        {loading ? (
          <Loader size="large" />
        ) : (
          <Fragment>
            <ProfileHeader provider={provider} />
            <Switch>
              <Route path={path} exact>
                <ButtonContainer>
                  <IconButton buttonText="Hamarosan!">
                    <FaTag className={classes.icon} />
                  </IconButton>
                  <IconButton
                    buttonText="Értékeld a munkám"
                    onClick={redirectToRatingHandler}
                  >
                    <FaAward className={classes.icon} />
                  </IconButton>
                </ButtonContainer>
                <Description bio={provider.bio} />
                <Gallery gallery={provider.gallery} />
              </Route>
              <Route path={`${path}/rating`}>
                <ButtonContainer>
                  <IconButton
                    buttonText="A vissza a szakember profiljára"
                    onClick={redirectBackHandler}
                  >
                    <FaArrowAltCircleLeft className={classes.icon} />
                  </IconButton>
                </ButtonContainer>
                <RatingForm id={id} />
              </Route>
            </Switch>
          </Fragment>
        )}
      </ScreenContent>
    </Fragment>
  );
};

export default ProviderProfilScreen;
