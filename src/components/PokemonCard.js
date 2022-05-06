import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TranslationNames from "../translationsNames.json";

const PokemonCard = ({ pokemon, i }) => {
  const [index, setIndex] = useState();

  useEffect(() => {
    if (i < 9) {
      setIndex(`00${i + 1}`);
    } else if (i < 99) {
      setIndex(`0${i + 1}`);
    } else {
      setIndex(i + 1);
    }
  }, []);

  // Vérification de l'ID pour l'afficher comme sur le pokédex officiel sous la forme No.001 - No.010 - No.100

  // Traduction des pokémons en français qui sont en anglais exclusivement

  return (
    <Link key={pokemon.name} to={`/le-pokemon/${pokemon.name}`}>
      <div className="rounded-lg transform bg-slate-200 hover:bg-slate-300 transition duration-500 hover:scale-110 py-4">
        <p>No.{index}</p>
        {index && (
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`}
            alt=""
            className="m-auto"
          />
        )}
        <p className="capitalize">{TranslationNames[i].french}</p>
      </div>
    </Link>
  );
};

export default PokemonCard;
