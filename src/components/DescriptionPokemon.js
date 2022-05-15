import React from "react";

export default function DescriptionPokemon({ pokemonChosen }) {
  return (
    /* Affichage description Pokémon */
    <div className="text-[1.25vw] mr-2">
      <span className="text-[1.25vw]">{pokemonChosen.description}</span>
    </div>
  );
}
