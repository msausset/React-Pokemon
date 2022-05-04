import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TranslationNames from "../translationsNames.json";

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
              // Vérification de l'ID pour l'afficher comme sur le pokédex officiel sous la forme No.001 - No.010 - No.100

              let num = "";
              let img = "";

              if (i < 9) {
                num = `No.00${i + 1}`;
                img = `00${i + 1}`;
              } else if (i < 99) {
                num = `No.0${i + 1}`;
                img = `0${i + 1}`;
              } else {
                num = `No.${i + 1}`;
                img = `${i + 1}`;
              }

              // Traduction des pokémons en français qui sont en anglais exclusivement

              return (
                <Link key={pokemon.name} to={`/le-pokemon/${pokemon.name}`}>
                  <div className="rounded-lg transform bg-slate-200 hover:bg-slate-300 transition duration-500 hover:scale-110 py-4">
                    <p>{num}</p>
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${img}.png`}
                      alt=""
                      className="m-auto"
                    />
                    <p className="capitalize">{TranslationNames[i].french}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
