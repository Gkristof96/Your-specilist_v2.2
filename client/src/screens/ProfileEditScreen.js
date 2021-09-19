import { Fragment } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import classes from "./ProfileEditScreen.module.scss";

import ScreenContent from "../components/UI/ScreenContent";
import ScreenHeader from "../components/UI/ScreenHeader";
import PersonalDataEdit from "../components/Profile/Edit/PersonalDataEdit";
import ProfessionDataEdit from "../components/Profile/Edit/ProfessionDataEdit";
import GalleryEdit from "../components/Profile/Edit/GalleryEdit";
import PasswordEdit from "../components/Profile/Edit/PasswordEdit";
import UserRemoval from "../components/Profile/Edit/UserRemoval";
import EditPageNavigation from "../components/Profile/Edit/EditPageNavigation";

const ProfileEditScreen = () => {
  let { path } = useRouteMatch();
  return (
    <Fragment>
      <ScreenHeader className="small-bg" />
      <ScreenContent padding="asimetric-padding">
        <div className={classes["edit-menu"]}>
          <EditPageNavigation />
        </div>
        <div className={classes["edit-form"]}>
          <Switch>
            <Route path={path} exact>
              <Redirect to={`${path}/personal`} />
            </Route>
            <Route path={`${path}/personal`}>
              <PersonalDataEdit />
            </Route>
            <Route path={`${path}/professions`}>
              <ProfessionDataEdit />
            </Route>
            <Route path={`${path}/gallery`}>
              <GalleryEdit />
            </Route>
            <Route path={`${path}/password`}>
              <PasswordEdit />
            </Route>
            <Route path={`${path}/removal`}>
              <UserRemoval />
            </Route>
          </Switch>
        </div>
      </ScreenContent>
    </Fragment>
  );
};

export default ProfileEditScreen;
