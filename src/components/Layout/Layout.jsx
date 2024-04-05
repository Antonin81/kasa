import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";

function Layout({ activeLink, children }) {
  return (
    <React.Fragment>
      <Header activeLink={activeLink} />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
