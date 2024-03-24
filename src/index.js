import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./styles/main.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<React.Fragment><p>Oupsi error 404</p><Link to={"/"}>Test home</Link></React.Fragment>} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
