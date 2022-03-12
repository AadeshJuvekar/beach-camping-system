import React from "react";
import "./landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="landingContainer" style={{ sm: 3, md: 6, lg: 12 }}>
        <div className="landingBody">
          <h1 className="landingText">Welcome to Beach Camping System </h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
