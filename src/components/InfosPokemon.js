import React from "react";
import man from "../images/man2.png";
import woman from "../images/woman2.png";

export default function InfosPokemon({ pokemonChosen }) {
  return (
    <div className="border-red mr-3">
      <div className="grid gap-4 grid-cols-2 bg-cyan-500 rounded-lg ">
        <div className="flex flex-col">
          <span className="pl-5 pb-2 pt-5 text-[1vw] font-bold text-white">
            Taille
          </span>
          <span className="pl-5 text-[1.25vw] font-bold">
            {/* Affichage taille Pokémon */}
            {pokemonChosen.taille}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="pl-5 pb-2 pt-5 text-[1vw] font-bold text-white">
            Catégorie
          </span>
          <span className="pl-5 text-[1.25vw] font-bold">
            {/* Affichage catégorie Pokémon */}
            {pokemonChosen.categorie}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="pl-5 pb-2 text-[1vw] font-bold text-white">
            Poids
          </span>
          <span className="pl-5 text-[1.25vw] font-bold">
            {/* Affichage poids Pokémon */}
            {pokemonChosen.poids}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="pl-5 pb-2 text-[1vw] font-bold text-white">
            Talent(s)
          </span>
          <span className="pl-5 text-[1.25vw] font-bold">
            {/* Affichage talents Pokémon */}
            {pokemonChosen.talent.map((leTalent) => {
              return <p key={leTalent.nom}>{leTalent.nom}</p>;
            })}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="pl-5 pb-2 text-[1vw] font-bold text-white">
            Sexe
          </span>
          <span className="pl-5 pb-5 text-[1.25vw] font-black">
            {/* Affichage sexe Pokémon */}
            {pokemonChosen.sexe.map((leSexe) => {
              if (leSexe.male && leSexe.femelle && leSexe.male !== "Inconnu") {
                return (
                  <div key={man} className="flex">
                    <div className="basis-1/4">
                      <img src={man} className="w-[1.5vw] h-[1.5vw]" alt="" />
                    </div>
                    <div key={woman} className="basis-1/4">
                      <img src={woman} className="w-[1.5vw] h-[1.5vw]" alt="" />
                    </div>
                  </div>
                );
              } else if (
                leSexe.male &&
                !leSexe.femelle &&
                leSexe.male !== "Inconnu"
              ) {
                return (
                  <div key={man} className="flex">
                    <div className="basis-1/4">
                      <img src={man} className="w-[1.5vw] h-[1.5vw]" alt="" />
                    </div>
                  </div>
                );
              } else if (
                !leSexe.male &&
                leSexe.femelle &&
                leSexe.femelle !== "Inconnu"
              ) {
                return (
                  <div key={woman} className="flex">
                    <div className="basis-1/4">
                      <img src={woman} className="w-[1.5vw] h-[1.5vw]" alt="" />
                    </div>
                  </div>
                );
              } else if (
                leSexe.male === "Inconnu" &&
                leSexe.femelle === "Inconnu"
              ) {
                return (
                  <div key="Inconnu" className="flex">
                    <span className="basis-1/4">Inconnu</span>
                  </div>
                );
              }
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
