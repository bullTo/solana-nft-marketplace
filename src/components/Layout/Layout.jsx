import React from "react";
import Routers from "../../routes/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={{ position: "relative" }}>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
