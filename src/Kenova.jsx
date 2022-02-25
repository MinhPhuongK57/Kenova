import React, { Fragment } from "react";
import "./scss/kenova.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/home/Home";
import OdcService from "./components/pages/odc-service/OdcService";
import DevopsService from "./components/pages/devops-service/DevopsService";
import Cases from "./components/pages/cases/Cases";
import Careers from "./components/pages/careers/Careers";
import Contact from "./components/pages/contact-us/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

const Kenova = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/odc-service" element={<OdcService />}></Route>
          <Route
            exact
            path="/devops-service"
            element={<DevopsService />}
          ></Route>
          <Route exact path="/cases" element={<Cases />}></Route>
          <Route exact path="/careers" element={<Careers />}></Route>
          <Route exact path="/contact-us" element={<Contact />}></Route>
        </Routes>
        <Footer />
        <ScrollToTop />
      </Fragment>
    </Router>
  );
};

export default Kenova;
