import React from "react";
import markerIcon from "../assets/marker.svg";
import mountFuji from "../assets/mount-fuji.jpg";

export default function Entry({ title, location, link, date, details }) {
  return (
    <article className="journal-entry">
      <div className="image-container">
        <img className="main-img" src={mountFuji} alt="entry-photo" />
      </div>
      <div className="info-container">
        <img className="marker" src={markerIcon} alt="marker-icon" />
        <span className="country">{title}</span>
        <a className="entry-location-link" href={link}>
          View on Google Maps
        </a>
        <h2 className="entry-title">{location}</h2>
        <span className="trip-date">{date}</span>
        <p className="entry-text">{details}</p>
      </div>
    </article>
  );
}
