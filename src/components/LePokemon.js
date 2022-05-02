import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LePokemon() {
  const params = useParams();
  const [pokemonChosen, setPokemonChosen] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
      .then((response) => response.json())
      .then((result) => setPokemonChosen(result))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <img
        alt=""
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonChosen.id}.png`}
      />
      {pokemonChosen.types &&
        pokemonChosen.types.map((pokemon) => {
          return <h1 key={pokemon.type.name}>{pokemon.type.name}</h1>;
        })}
    </div>
  );
}
