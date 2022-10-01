import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavTop from "./components/navTop/NavTop";
import Contact from "./views/contactPage/Contact";
import Home from "./views/homePage/Home";

const App = () => {
  return (
    <div>
      <Router >
        <NavTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
