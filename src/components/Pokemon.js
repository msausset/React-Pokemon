import React from "react";
import PokemonCard from "./PokemonCard";
import Pokemons from "../pokemons.json";

export default function Pokemon() {
  // Affichage des pokémons avec le .map()

  return (
    <div className="bg-white bg-[url('../src/images/container_bg.png')] m-auto w-2/3 min-h-screen">
      <div className="bg-white w-2/3 m-auto py-5">
        <div className="grid grid-cols-4 gap-4 m-3 text-center text-[1vw]">
          {Pokemons &&
            Pokemons.map((pokemon) => {
              return <PokemonCard pokemon={pokemon} key={pokemon.nom} />;
            })}
        </div>
      </div>
    </div>
  );
}
