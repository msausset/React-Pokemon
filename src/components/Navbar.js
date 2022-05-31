import React from "react";
import { Link } from "react-router-dom";
import pokemon_1 from "../images/icone_pokemon_1.png";
import pokemon_2 from "../images/icone_pokemon_2.png";

export default function navbar() {
  return (
    // Affichage Navbar (flex)

    <nav className="text-center bg-white drop-shadow-lg">
      <div className="flex m-auto w-1/5">
        <Link
          to="/"
          className="rounded-full hover:underline hover:bg-yellow-600 hover:text-white ease-in duration-300 flex-auto"
        >
          <img alt="" className="w-[2vw] h-[2vw] inline" src={pokemon_1} />
          <p className="text-[1.5vw]">Accueil</p>
        </Link>
        <Link
          to="/pokemon"
          className="rounded-full hover:underline hover:bg-blue-600 hover:text-white ease-in duration-300 flex-auto"
        >
          <img alt="" className="w-[2vw] h-[2vw] inline" src={pokemon_2} />
          <p className="text-[1.5vw]">Pokémon</p>
        </Link>
      </div>
    </nav>
  );
}
