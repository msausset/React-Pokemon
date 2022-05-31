import React from "react";

export default function TypePokemon({ pokemonChosen }) {
  return (
    <div>
      <span className="text-[1.25vw]">Type(s)</span>
      <div className="flex flex-row">
        {pokemonChosen.type.map((type) => {
          switch (type.nom) {
            case "Insecte":
              return (
                <div
                  key={type.nom}
                  className="insecte w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Dragon":
              return (
                <div
                  key={type.nom}
                  className="dragon w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Fée":
              return (
                <div
                  key={type.nom}
                  className="fee w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Feu":
              return (
                <div
                  key={type.nom}
                  className="feu w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Spectre":
              return (
                <div
                  key={type.nom}
                  className="spectre w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Sol":
              return (
                <div
                  key={type.nom}
                  className="sol w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Normal":
              return (
                <div
                  key={type.nom}
                  className="normal w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Psy":
              return (
                <div
                  key={type.nom}
                  className="psy w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Acier":
              return (
                <div
                  key={type.nom}
                  className="acier w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Ténèbres":
              return (
                <div
                  key={type.nom}
                  className="tenebres w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Électrik":
              return (
                <div
                  key={type.nom}
                  className="electrik w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Combat":
              return (
                <div
                  key={type.nom}
                  className="combat w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Vol":
              return (
                <div
                  key={type.nom}
                  className="vol w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Plante":
              return (
                <div
                  key={type.nom}
                  className="plante w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Eau":
              return (
                <div
                  key={type.nom}
                  className="eau w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Glace":
              return (
                <div
                  key={type.nom}
                  className="glace w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Poison":
              return (
                <div
                  key={type.nom}
                  className="poison w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
            case "Roche":
              return (
                <div
                  key={type.nom}
                  className="roche w-[7.5vw] text-center mr-2 mt-3 rounded"
                >
                  <span
                    className=" text-[1vw] text-white align-center"
                    key={type.nom}
                  >
                    {type.nom}
                  </span>
                </div>
              );
          }
        })}
      </div>
    </div>
  );
}
