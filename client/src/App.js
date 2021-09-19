import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import "./styles/App.scss";

import MainLayout from "./components/Layout/MainLayout";
import Loader from "./components/UI/Loader";

const HomeScreen = React.lazy(() => import("./screens/HomeScreen"));
const ContactScreen = React.lazy(() => import("./screens/ContactScreen"));
const OfferScreen = React.lazy(() => import("./screens/OfferScreen"));
const ErrorScreen = React.lazy(() => import("./screens/ErrorScreen"));
const ProvidersListScreen = React.lazy(() =>
  import("./screens/ProviderListScreen")
);
const ProviderProfileScreen = React.lazy(() =>
  import("./screens/ProviderProfileScreen")
);
const UserProfileScreen = React.lazy(() =>
  import("./screens/UserProfileScreen")
);
const ProfileEditScreen = React.lazy(() =>
  import("./screens/ProfileEditScreen")
);
const AuthScreen = React.lazy(() => import("./screens/AuthScreen"));

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<Loader size="full" />}>
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
            <Route path="/providers" exact>
              <ProvidersListScreen />
            </Route>
            <Route path="/providers/page/:pageNumber">
              <ProvidersListScreen />
            </Route>
            <Route path="/provider/:id">
              <ProviderProfileScreen />
            </Route>
            <Route path="/profile" exact>
              <UserProfileScreen />
            </Route>
            <Route path="/profile/edit">
              <ProfileEditScreen />
            </Route>
            <Route path="/contact">
              <ContactScreen />
            </Route>
            <Route path="/offer">
              <OfferScreen />
            </Route>
            <Route path="/auth">
              <AuthScreen />
            </Route>
            <Route path="*">
              <ErrorScreen />
            </Route>
          </Switch>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;
