import React from "react";
import "./gallery.css";
import img1 from "../../../static/gallery/1.jpg";
import img2 from "../../../static/gallery/10.jpg";
import img3 from "../../../static/gallery/7.jpg";
import img4 from "../../../static/gallery/4.jpg";
import img5 from "../../../static/gallery/5.jpg";
import img6 from "../../../static/gallery/9.jpg";
import img7 from "../../../static/gallery/2.jpg";
import img8 from "../../../static/gallery/8.jpg";
function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <div className="galleryContainer">
        <h1 className="galleryTitle">Gallery</h1>
        <div className="galleryListWrapper">
          <ul className="galleryList clearfix">
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img1} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img2} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img3} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img4} alt="Image 1" />
              </figure>
            </li>
          </ul>
          <ul className="galleryList clearfix">
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img5} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img6} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img7} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img8} alt="Image 1" />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gallery;