import React from "react";
import globalIcon from "../assets/global-icon.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={globalIcon} alt="Global icon" />
      <h1>my travel journal.</h1>
    </header>
  );
}
