import React from "react";
import "./packages.css";

function Packages() {
  return (
    <div className="packages">
      <div className="packageContainer">
        <div className="packageWrapper">
          <div className="packageSection">Basic</div>
          <div className="packageSection">Standard</div>
          <div className="packageSection">Enhanced</div>
          <div className="packageSection">Premium</div>
        </div>
      </div>
    </div>
  );
}

export default Packages;