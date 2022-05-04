import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DescriptionPokemon() {
  const params = useParams();
  const [descriptionPokemon, setDescriptionPokemon] = useState({});

  // Plusieurs fetchs

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.pokemon}`)
      .then((response) => response.json())
      .then((result) => setDescriptionPokemon(result))
      .catch((err) => console.error(err));
  }, []);

  console.log(descriptionPokemon.flavor_text_entries);

  console.log("je suis " + params.pokemon);

  /*   console.log(pokemonChosen.flavor_text_entries[24]);
   */
  // Vérification dans le tableau de la langue de traduction

  let description = "";
  console.log(descriptionPokemon?.flavor_text_entries?.length);
  if (descriptionPokemon?.flavor_text_entries?.length > 0) {
    if (descriptionPokemon?.flavor_text_entries[24].language.name == "ko") {
      description = descriptionPokemon?.flavor_text_entries[25]?.flavor_text;
    } else {
      description = descriptionPokemon?.flavor_text_entries[24]?.flavor_text;
    }
  }

  return <p className="text-sm flex">{description}</p>;
}
