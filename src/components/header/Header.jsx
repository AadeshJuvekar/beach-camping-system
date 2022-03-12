import { BeachAccess } from "@mui/icons-material";
import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerContainer"></div>
      <div className="headerWrapper">
        <div className="headerLeft">
          <BeachAccess className="headerLogo" />
          <span className="headerTitle">Beach Camping System</span>
        </div>
        <div className="headerRight">
          <div className="headerMenu">
            <span className="headerMenuItem">Home</span>
            <span className="headerMenuItem">About</span>
            <span className="headerMenuItem">Services</span>
            <span className="headerMenuItem">Gallery</span>
            <span className="headerMenuItem">Packages</span>
            <span className="headerMenuItem">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
