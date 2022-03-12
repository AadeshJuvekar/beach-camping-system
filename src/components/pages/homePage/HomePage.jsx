import React from "react";
import "./homePage.css";
import Landing from "../landing/Landing";
import About from "../about/About";
import Services from "../services/Services";

function homePage() {
  return (
    <div className="homePage">
      <Landing />
      <About/>
      <Services/>
    </div>
  );
}

export default homePage;
