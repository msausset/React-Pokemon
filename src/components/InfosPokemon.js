import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TranslationAbilities from "../translationsAbilities.json";

export default function InfosPokemon({ pokemonChosen }) {
  const params = useParams();
  const [infosPokemon, setInfosPokemon] = useState({});
  const [category, setCategory] = useState();

  // Plusieurs fetchs

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.pokemon}`)
      .then((response) => response.json())
      .then((result) => setInfosPokemon(result))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (infosPokemon?.genera[3].genus.length > 0) {
      setCategory(infosPokemon?.genera[3].genus.split(" ")[1]);
    }
  }, [infosPokemon]);

  console.log(category);

  // Découpe de la catégorie du Pokémon (API : Pokémon graine --> Affichage : Graine)
  // Si tableau pas vide

  return (
    <div className="grid gap-4 grid-cols-2 bg-cyan-500 rounded-lg mr-3">
      <span>
        <p className="pl-5 pt-5 text-[1vw] font-bold text-white">Taille</p>
        <p className="pl-5 text-[1.25vw] font-bold">
          {pokemonChosen?.height / 10} m
        </p>
      </span>
      <span>
        <p className="pl-5 pt-5 text-[1vw] font-bold text-white">Catégorie</p>
        <p className="pl-5 text-[1.25vw] font-bold">{category}</p>
      </span>
      <span>
        <p className="pl-5 pt-5 text-[1vw] font-bold text-white	">Poids</p>
        <p className="pl-5 pb-5 text-[1.25vw] font-bold">
          {pokemonChosen?.weight / 10} kg
        </p>
      </span>
      {/* div span */}
      <span>
        <p className="pl-5 pt-5 text-[1vw] font-bold text-white">Talent(s)</p>
        <p className="pl-5 pb-5 text-[1.25vw] font-bold">
          {infosPokemon[0]?.abilities.map((ability) => {
            const result = TranslationAbilities.find((trans) => {
              /* if (ability.ability.name === trans.english) {
        abilityPokemon = abilityPokemon?.concat(`${trans.french} `);        
      } */
              return trans.english === ability.ability.name;
            }).french;
            return <div key={result}>{result}</div>;
          })}
        </p>
      </span>
    </div>
  );
}
