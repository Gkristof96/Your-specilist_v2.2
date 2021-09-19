import { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";

const MainLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="background" />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
