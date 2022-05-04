import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DescriptionPokemon() {
  const params = useParams();
  const [infosPokemon, setInfosPokemon] = useState({});

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
      .then((result) => setInfosPokemon(result))
      .catch((err) => console.error(err));
  }, []);

  let category = "";

  // Découpe de la catégorie du Pokémon (API : Pokémon graine --> Affichage : Graine)
  // Si tableau pas vide

  if (infosPokemon[1]?.genera[3]?.genus?.length > 0) {
    category = infosPokemon[1].genera[3].genus.split(" ")[1];
  }

  return (
    <div className="grid gap-4 grid-cols-2 bg-cyan-500 rounded-lg mr-3">
      
      <span>
      <p className="pl-5 pt-5 text-lg font-bold text-white	">Poids</p>
      <p className="pl-5 text-2xl font-bold">{infosPokemon[0]?.weight / 10} kg</p>
      </span>
      <span>
      <p className="pl-5 pt-5 text-lg font-bold text-white">Catégorie</p>
      <p className="pl-5 text-2xl font-bold">{category}</p>
      </span>
      <span>
      <p className="pl-5 pt-5 text-lg font-bold text-white">Taille</p>
      <p className="pl-5 pb-5 text-2xl font-bold"> {infosPokemon[0]?.height / 10} m</p>
      </span>
    </div>
  );
}
