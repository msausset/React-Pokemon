import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav>
      <Link to="/">Accueil </Link>
      <Link to="/pokemon">Pokemon </Link>
    </nav>
  );
}
