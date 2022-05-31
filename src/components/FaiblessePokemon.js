import React from "react";

export default function FaiblessePokemon({ pokemonChosen }) {
  return (
    <div>
      <span className="text-[1.25vw]">Faiblesse(s)</span>
      <div className="flex flex-row flex-wrap">
        {/* Map sur les faiblesses du Pokémon choisi avec un background-color différent en fonction du type (switch) */}

        {pokemonChosen.faiblesse.map((faiblesse) => {
          switch (faiblesse.nom) {
            case "Insecte":
              return (
                <div
                  key={faiblesse.nom}
                  className="insecte w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Dragon":
              return (
                <div
                  key={faiblesse.nom}
                  className="dragon w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Fée":
              return (
                <div
                  key={faiblesse.nom}
                  className="fee w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Feu":
              return (
                <div
                  key={faiblesse.nom}
                  className="feu w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Spectre":
              return (
                <div
                  key={faiblesse.nom}
                  className="spectre w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Sol":
              return (
                <div
                  key={faiblesse.nom}
                  className="sol w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Normal":
              return (
                <div
                  key={faiblesse.nom}
                  className="normal w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Psy":
              return (
                <div
                  key={faiblesse.nom}
                  className="psy w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Acier":
              return (
                <div
                  key={faiblesse.nom}
                  className="acier w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Ténèbres":
              return (
                <div
                  key={faiblesse.nom}
                  className="tenebres w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Électrik":
              return (
                <div
                  key={faiblesse.nom}
                  className="electrik w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Combat":
              return (
                <div
                  key={faiblesse.nom}
                  className="combat w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Vol":
              return (
                <div
                  key={faiblesse.nom}
                  className="vol w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Plante":
              return (
                <div
                  key={faiblesse.nom}
                  className="plante w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Eau":
              return (
                <div
                  key={faiblesse.nom}
                  className="eau w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Glace":
              return (
                <div
                  key={faiblesse.nom}
                  className="glace w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Poison":
              return (
                <div
                  key={faiblesse.nom}
                  className="poison w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
            case "Roche":
              return (
                <div
                  key={faiblesse.nom}
                  className="roche w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={faiblesse.nom}
                  >
                    {faiblesse.nom}
                  </span>
                </div>
              );
          }
        })}
      </div>
    </div>
  );
}
