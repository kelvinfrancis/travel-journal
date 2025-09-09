import React from "react";
import markerIcon from "../assets/marker.svg";

export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="image-container">
        <img className="main-img" src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src={markerIcon} alt="marker-icon" />
        <span className="country">{props.title}</span>
        <a className="entry-location-link" target="_blank" href={props.link}>
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.location}</h2>
        <span className="trip-date">{props.date}</span>
        <p className="entry-text">{props.details}</p>
      </div>
      <hr />
    </article>
  );
}
