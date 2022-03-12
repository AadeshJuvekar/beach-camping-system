import React from "react";
import "./homePage.css";
import Landing from "../landing/Landing";
import About from "../about/About";
import Services from "../services/Services";
import Gallery from './../gallery/Gallery';

function homePage() {
  return (
    <div className="homePage">
      <Landing />
      <About/>
      <Services/>
      <Gallery/>
    </div>
  );
}

export default homePage;
