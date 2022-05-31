**GROUPE**

Maxime SAUSSET - Viverk ANTHONIPPILLAI

**PRÉSENTATION DU PROJET**

Le projet consiste à représenter un Pokédex le plus fidèlement possible, avec la liste des Pokémons ainsi que leur image. Pour ce projet, nous nous sommes inspirés du site officiel Pokémon pour faire notre pokédex au niveau du CSS.

**LISTE DES FONCTIONNALITÉS**

- Liste des pokémons / Affichage du nom et de l'image (Génération I)
- Affichage des détails du Pokémon lors du clic (Description, Type(s), Faiblesse(s), Image, Stats, Évolution(s))
- Création d'une API recensant les pokémons ainsi que les divers éléments utiles à afficher (json)
- Possibilité de voir le Pokémon suivant ou précédent lorsque l'on est sur les détails d'un Pokémon
- Possibilité de cliquer sur l'évolution en bas de page pour afficher les détails du Pokémon en question
- Utilisation des Routes / Hooks / State
- Utilisation de TailWindCSS

**PROBLEMES RENCONTRÉS**

Nous avons rencontrés des problèmes sur l'utilisation de PokéAPI (API externe) car pour récupérer les différentes informations d'un Pokémon, l'API nous renvoit sur d'autres URL. Ce qui nous pousse à faire pas mal de Fetch, ce qui est peu pratique, alors nous avons décider de créer notre propre API.
