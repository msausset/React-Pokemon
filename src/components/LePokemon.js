import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DescriptionPokemon from "./DescriptionPokemon";
import InfosPokemon from "./InfosPokemon";
import TypePokemon from "./TypePokemon";
import FaiblessePokemon from "./FaiblessePokemon";
import Pokemons from "../pokemons.json";
import StatsPokemon from "./StatsPokemon";
import EvolutionPokemon from "./EvolutionPokemon";
import SuivantPokemon from "./SuivantPokemon";
import PrecedentPokemon from "./PrecedentPokemon";

export default function LePokemon() {
  const params = useParams();
  const [pokemonChosen, setPokemonChosen] = useState([]);

  useEffect(() => {
    Pokemons.map((pokemon) => {
      if (pokemon.nom === params.pokemon) setPokemonChosen(pokemon);
    });
  }, []);

  // Mettre fetch app.js

  if (!pokemonChosen.nom) {
    return <div className="h-[100vh] w-[100vw] bg-red-500">Loading...</div>;
  }

  return (
    <div className="bg-white bg-[url('../src/images/container_bg.png')] m-auto w-[55vw] min-h-screen">
      <div className="bg-white w-[50vw] m-auto py-5">
        {/*  Pokémon suivant / précédent */}

        <div className="flex mb-5 ">
          <div className="w-2/4 text-center bg-slate-400 mr-1 ml-1 rounded">
            <PrecedentPokemon pokemonChosen={pokemonChosen} />
          </div>
          <div className="w-2/4 text-center bg-slate-400 mr-1 ml-1 rounded">
            <SuivantPokemon pokemonChosen={pokemonChosen} />
          </div>
        </div>

        {/* Nom / ID Pokémon */}

        <h1 className="text-center capitalize font-bold text-[1.5vw]">
          {pokemonChosen.nom} No.{pokemonChosen.id}
        </h1>

        {/* Grille de toutes infos Pokémon */}

        <div className="grid gap-4 grid-cols-2 pt-10">
          <div className="row-span-2 bg-slate-200 rounded ml-2 border-red">
            {/* Image Pokémon */}

            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonChosen.id}.png`}
              alt=""
              className="w-full"
            />
          </div>

          {/* Description Pokémon */}

          <div>
            <DescriptionPokemon pokemonChosen={pokemonChosen} />
          </div>

          {/* Infos Pokémon (taille, poids, etc...) */}

          <div>
            <InfosPokemon pokemonChosen={pokemonChosen} />
          </div>

          {/* Stats de base Pokémon */}

          <div className="row-span-3">
            {/*   <div className="ml-5 text-[1vw]">Stats de base</div>
            <StatsPokemon pokemonChosen={pokemonChosen.stats} /> */}
            UN TEXTE ICI
          </div>

          {/* Types Pokémon */}

          <div>
            <TypePokemon pokemonChosen={pokemonChosen} />
          </div>

          {/* Faiblesses Pokémon */}

          <div>
            <FaiblessePokemon pokemonChosen={pokemonChosen} />
          </div>
        </div>

        {/* Evolution Pokémon */}

        <div>
          <EvolutionPokemon pokemonChosen={pokemonChosen.evolution} />
        </div>
      </div>
    </div>
  );
}
