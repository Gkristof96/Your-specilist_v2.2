import { useState, Fragment } from "react";

import Header from "./Header";
import SideDrawer from './SideDrawer'
import Footer from "./Footer";

const Layout = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerHandler = () => setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen)
  console.log(isDrawerOpen)

  return (
    <Fragment>
      <Header onToggleDrawer={toggleDrawerHandler} isDrawerOpen={isDrawerOpen} />
      <SideDrawer onToggleDrawer={toggleDrawerHandler} isDrawerOpen={isDrawerOpen} />
      <div className="background" />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
