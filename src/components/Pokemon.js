import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

export default function Pokemon() {
  // Requête sur l'API Pokéapi pour récuperer les pokémons

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => response.json())
      .then((result) => setPokemons(result))
      .catch((err) => console.error(err));
  }, []);

  // Affichage des pokémons avec le .map()
  // La variable i permet d'afficher l'image du pokémon via l'index

  return (
    <div className="bg-white bg-[url('../src/images/container_bg.png')] m-auto w-2/3 min-h-screen">
      <div className="bg-white w-2/3 m-auto py-5">
        <div className="grid grid-cols-4 gap-4 m-3 text-center text-xs">
          {pokemons.results &&
            pokemons.results.map((pokemon, i) => {
              return <PokemonCard pokemon={pokemon} i={i} key={pokemon.name} />;
            })}
        </div>
      </div>
    </div>
  );
}
