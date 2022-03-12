import React from "react";
import "./homePage.css";
import Landing from "../landing/Landing";
import About from "../about/About";

function homePage() {
  return (
    <div className="homePage">
      <Landing />
      <About/>
    </div>
  );
}

export default homePage;
