import React from "react";
import markerIcon from "../assets/marker.svg";

export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="image-container">
        <img
          className="main-img"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div className="info-container">
        <img className="marker" src={markerIcon} alt="marker-icon" />
        <span className="country">{props.country}</span>
        <a
          className="entry-location-link"
          target="_blank"
          href={props.googleMapsLink}
        >
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.title}</h2>
        <span className="trip-date">{props.dates}</span>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
