import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logged from "./pages/Logged";
import Header from "../src/components/Header/header";
import Footer from "./components/Footer/footer";
import "./style/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logged" element={<Logged />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
