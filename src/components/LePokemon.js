import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Translation from "../translations.json";
import DescriptionPokemon from "./DescriptionPokemon";

export default function LePokemon() {
  const params = useParams();
  const [pokemonChosen, setPokemonChosen] = useState({});

  // Plusieurs fetchs

  useEffect(() => {
    Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`).then(
        (response) => response.json()
      ),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.pokemon}`).then(
        (response) => response.json()
      ),
    ])
      .then((result) => setPokemonChosen(result))
      .catch((err) => console.error(err));
  }, []);

  // Vérification dans le tableau de la langue de traduction

  let description = "";
  if (pokemonChosen[1]?.flavor_text_entries[24].language.name == "ko") {
    description = pokemonChosen[1]?.flavor_text_entries[25]?.flavor_text;
  } else {
    description = pokemonChosen[1]?.flavor_text_entries[24]?.flavor_text;
  }

  /*   console.log(pokemonChosen[1]?.flavor_text_entries[24]);
   */
  let num = "";
  let img = "";

  if (pokemonChosen[0]?.id < 9) {
    num = `No.00${pokemonChosen[0]?.id}`;
    img = `00${pokemonChosen[0]?.id}`;
  } else if (pokemonChosen[0]?.id < 99) {
    num = `No.0${pokemonChosen[0]?.id}`;
    img = `0${pokemonChosen[0]?.id}`;
  } else {
    num = `No.${pokemonChosen[0]?.id}`;
    img = `${pokemonChosen[0]?.id}`;
  }

  /*   console.log(pokemonChosen[1]?.flavor_text_entries[24].language.name);
   */
  return (
    <div className="bg-white bg-[url('../src/images/container_bg.png')] m-auto w-2/3 min-h-screen">
      <div className="bg-white w-2/3 m-auto py-5">
        <h1 className="text-center capitalize font-bold text-xl">
          {Translation[pokemonChosen[0]?.id - 1]?.french} {num}
        </h1>
        <div className="grid gap-4 grid-cols-2 pt-10">
          <img
            className="bg-slate-100 ml-2 rounded-lg"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${img}.png`}
            alt=""
          />
          <DescriptionPokemon />
          <p className="text-sm flex">{description}</p>
        </div>
      </div>
    </div>
  );
}
