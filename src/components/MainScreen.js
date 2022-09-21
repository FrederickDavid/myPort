import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import HomePage from "./HomePage";

const MainScreen = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainScreen;
