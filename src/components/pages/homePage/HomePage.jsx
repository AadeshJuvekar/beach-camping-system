import React from "react";
import "./homePage.css";
import Landing from "../landing/Landing";
import About from "../about/About";
import Services from "../services/Services";
import Gallery from "./../gallery/Gallery";
import Packages from "../packages/Packages";
<<<<<<< HEAD
import Pricing from "../packages/Packages";
import SignIn from "../../signin/SignIn";
import SignUp from "../../signup/Signup";
import Contact from "../contact/Contact";
=======
import Contact from "./../contact/Contact";
>>>>>>> e3454e198b5c47bbbcd04bd5fcb82b397fd1568c

function homePage() {
  return (
    <div className="homePage">
      <Landing />
      <About />
      <Services />
      <Gallery />
      <Packages />
<<<<<<< HEAD
      <Contact/>
=======
      <Contact />
>>>>>>> e3454e198b5c47bbbcd04bd5fcb82b397fd1568c
    </div>
  );
}

export default homePage;
