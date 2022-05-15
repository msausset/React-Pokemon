import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemons from "../pokemons.json";
import next from "../images/next.png";

export default function SuivantPokemon({ pokemonChosen }) {
  const indexPokemon = Pokemons.indexOf(pokemonChosen) + 1;
  const [nextPokemon, setNextPokemon] = useState();
  const changePokemon = "Changing Pokémon";

  useEffect(() => {
    setNextPokemon(Pokemons[indexPokemon]);
  }, [indexPokemon]);

  if (nextPokemon && nextPokemon.nom) {
    return (
      <Link
        key={nextPokemon.nom}
        to={`/le-pokemon/${nextPokemon.nom}`}
        onClick={changePokemon}
      >
        <div className="flex space-x-2 justify-center">
          <span className="text-white">No.{nextPokemon.id} </span>
          <span>{nextPokemon.nom} </span>
          <img src={next} className="w-[1.5vw] h-[1.5vw] mt-[0.20vw]" alt="" />
        </div>
      </Link>
    );
  }
}
