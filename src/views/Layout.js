import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";


import TopHeader from "../components/layout/TopHeader";
import Navigation from "../components/layout/Navigation";
import SideBar from "../components/layout/SideBar";
import Body from "../components/layout/Body";
import DownloadApp from "../components/layout/DownloadApp";
import QuickLinks from "../components/layout/QuickLinks";
import Footer from "../components/layout/Footer";

import menuItems from "../menuItems";

const Layout = () => {
  const mobile = useMediaQuery("(max-width:768px)");
  const [show, setShow] = useState(false);

  return (
    <>
      <SideBar show={show} setShow={setShow} menus={menuItems} />
      {!mobile && <TopHeader />}
      <Navigation setShow={setShow} menus={menuItems} />
      <Body />
      <DownloadApp />
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Layout;
