import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TranslationNames from "../translationsNames.json";
import DescriptionPokemon from "./DescriptionPokemon";
import InfosPokemon from "./InfosPokemon";

export default function LePokemon() {
  const params = useParams();
  const [pokemonChosen, setPokemonChosen] = useState({});
  const [index, setIndex] = useState();

  // Plusieurs fetchs

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
      .then((response) => response.json())
      .then((result) => setPokemonChosen(result))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (pokemonChosen?.id < 9) {
      setIndex(`00${pokemonChosen?.id + 1}`);
    } else if (pokemonChosen?.id < 99) {
      setIndex(`0${pokemonChosen?.id + 1}`);
    } else {
      setIndex(pokemonChosen?.id + 1);
    }
  }, [pokemonChosen]);

  return (
    <div className="bg-white bg-[url('../src/images/container_bg.png')] m-auto w-[55vw] min-h-screen">
      <div className="bg-white w-[50vw] m-auto py-5">
        <h1 className="text-center capitalize font-bold text-xl">
          {TranslationNames[index - 1]?.french} No.{index}
        </h1>
        <div className="grid gap-4 grid-cols-2 pt-10">
          <div className="row-span-2 bg-slate-200 rounded ml-2 border-red">
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`}
              alt=""
              className="m-auto"
            />
          </div>
          <div>
            <DescriptionPokemon />
          </div>
          <div>
            <InfosPokemon pokemonChosen={pokemonChosen} />
          </div>
        </div>
      </div>
    </div>
  );
}
