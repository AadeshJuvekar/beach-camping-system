import React from "react";
import "./gallery.css";
import img1 from '../../../static/gallery/1.jpg';
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
                <img src={img1} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img1} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img1} alt="Image 1" />
              </figure>
            </li>
          </ul>
          <ul className="galleryList clearfix">
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img1} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img1} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img1} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img1} alt="Image 1" />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
