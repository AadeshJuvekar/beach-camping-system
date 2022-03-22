import React from "react";
import "./landing.css";

function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="landingContainer">
        <div className="landingBody">
          <h1 className="landingText">Alibag Beach Camping</h1>
          <h3 className="landingDescription">
            Sky above, Sea Below <br />
            Peace Within
          </h3>

          <button className="landingButton">Packages</button>
          <button className="landingButton">Services</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
