import React from "react";
import { Link } from "react-router-dom";

export default function EvolutionPokemon({ pokemonChosen }) {
  const changePokemon = "Changing Pokémon";
  return (
    <div className="bg-slate-600 ml-5 mr-5 rounded-[1vw]">
      <span className="ml-5 text-[1.5vw] text-white">Évolutions</span>
      <div className="mr-5 ml-5 mt-5 flex justify-center gap-[5vw]">
        {/* Map sur les pokémons qui font partis de son évolution */}

        {pokemonChosen.map((evolution) => {
          return (
            <Link
              key={evolution.nom}
              to={`/le-pokemon/${evolution.nom}`}
              onClick={changePokemon}
            >
              <div key={evolution.nom}>
                <div className="rounded-full bg-slate-400 border-solid border-white border-2 mb-2 shadow-md shadow-black">
                  {/* Affichage image, nom et ID */}
                  <img
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${evolution.id}.png`}
                    alt=""
                    className="w-[8vw]"
                  />
                </div>
                <div className="text-white text-[1vw] text-center mb-5">
                  {evolution.nom} #{evolution.id}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
