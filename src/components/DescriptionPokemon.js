import React from "react";

export default function DescriptionPokemon({ pokemonChosen }) {
  return (
    /* Affichage description Pokémon */
    <div className="text-[1vw] mr-2">
      <span className="text-[1.2vw]">{pokemonChosen.description}</span>
    </div>
  );
}
