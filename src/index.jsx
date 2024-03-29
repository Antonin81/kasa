import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./assets/styles/main.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HousingDetails from "./pages/HousingDetails/HousingDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import More from "./pages/More/More";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/a-propos" element={<More />} />
          <Route
            exact
            path="/fiche-logement/:selectedHousing"
            element={<HousingDetails />}
          />
          <Route
            path="*"
            element={
              <main>
                <p>Oupsi error 404</p>
                <Link to={"/"}>Test home</Link>
              </main>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </React.Fragment>,
);
