import React from "react";

// Page d'accueil

export default function Home() {
  return (
    <div className="bg-white bg-[url('../src/images/container_bg.png')] m-auto w-2/3 min-h-screen">
      <div className="bg-white w-1/2 m-auto pt-5 rounded-lg">
        <p className="text-center text-xl">Bienvenue sur mon Pokédex !</p>
        <br />
        <p className="text-xs p-2">
          Vous avez besoin d'une information sur un Pokémon ?
        </p>
        <br />
        <p className="text-xs p-2">
          Vous êtes bien tombé ! Ici, nous avons le Pokédex complet de la
          Première génération - (On est des puristes du jeu ici, pas question
          d'ajouter les générations suivantes ...) - pour vous informer sur ce
          que vous souhaitez. Le nom, le(s) type(s), la taille, le poids, et
          bien plus encore alors n'hésitez pas à aller faire un tour !{" "}
        </p>
        <br />
        <p className="text-xs text-center p-2">Bonne chasse dresseurs 😃</p>
      </div>
    </div>
  );
}
