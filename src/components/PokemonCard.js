import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  // Vérification de l'ID pour l'afficher comme sur le pokédex officiel sous la forme No.001 - No.010 - No.100

  return (
    <Link key={pokemon.nom} to={`/le-pokemon/${pokemon.nom}`}>
      <div className="rounded-lg transform bg-slate-200 hover:bg-slate-300 transition duration-500 hover:scale-110 py-4">
        <p>No.{pokemon.id}</p>
        {pokemon.id && (
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`}
            alt=""
            className="m-auto"
          />
        )}
        <p className="capitalize">{pokemon.nom}</p>
      </div>
    </Link>
  );
};

export default PokemonCard;
