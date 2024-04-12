import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./assets/styles/main.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HousingDetails from "./pages/HousingDetails/HousingDetails";
import More from "./pages/More/More";
import Layout from "./components/Layout/Layout";
import Error from "./pages/Error/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            exact
            path="/a-propos"
            element={
              <Layout>
                <More />
              </Layout>
            }
          />
          <Route
            exact
            path="/fiche-logement/:selectedHousing"
            element={
              <Layout>
                <HousingDetails />
              </Layout>
            }
          />
          <Route
            path="/error"
            element={
              <Layout>
                <Error />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </React.Fragment>,
);
