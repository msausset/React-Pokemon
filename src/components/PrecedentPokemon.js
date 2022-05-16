import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemons from "../pokemons.json";
import back from "../images/back.png";

export default function PrecedentPokemon({ pokemonChosen }) {
  const indexPokemon = Pokemons.indexOf(pokemonChosen) - 1;
  const [previousPokemon, setPreviousPokemon] = useState();
  const changePokemon = "Changing Pokémon";

  useEffect(() => {
    setPreviousPokemon(Pokemons[indexPokemon]);
  }, [indexPokemon]);

  if (previousPokemon && previousPokemon.nom) {
    return (
      <Link
        key={previousPokemon.nom}
        to={`/le-pokemon/${previousPokemon.nom}`}
        onClick={changePokemon}
      >
        <div className="flex space-x-2 justify-center items-center">
          <img src={back} className="w-[1.5vw] h-[1.5vw]" alt="" />
          <span className="text-white">No.{previousPokemon.id} </span>
          <span>{previousPokemon.nom}</span>
        </div>
      </Link>
    );
  }
}
