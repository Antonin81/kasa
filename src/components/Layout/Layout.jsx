import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
