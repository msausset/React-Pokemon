import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Translation from "../translations.json";
import DescriptionPokemon from "./DescriptionPokemon";

export default function LePokemon() {
  const params = useParams();
  const [pokemonChosen, setPokemonChosen] = useState({});

  // Plusieurs fetchs

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
      .then((response) => response.json())
      .then((result) => setPokemonChosen(result))
      .catch((err) => console.error(err));
  }, []);

  let num = "";
  let img = "";

  if (pokemonChosen?.id < 9) {
    num = `No.00${pokemonChosen?.id}`;
    img = `00${pokemonChosen?.id}`;
  } else if (pokemonChosen?.id < 99) {
    num = `No.0${pokemonChosen?.id}`;
    img = `0${pokemonChosen?.id}`;
  } else {
    num = `No.${pokemonChosen?.id}`;
    img = `${pokemonChosen?.id}`;
  }

  return (
    <div className="bg-white bg-[url('../src/images/container_bg.png')] m-auto w-2/3 min-h-screen">
      <div className="bg-white w-2/3 m-auto py-5">
        <h1 className="text-center capitalize font-bold text-xl">
          {Translation[pokemonChosen?.id - 1]?.french} {num}
        </h1>
        <div className="grid gap-4 grid-cols-2 pt-10">
          <img
            className="bg-slate-100 ml-2 rounded-lg"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${img}.png`}
            alt=""
          />
          <DescriptionPokemon />
        </div>
      </div>
    </div>
  );
}
