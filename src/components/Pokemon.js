import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((response) => response.json())
      .then((result) => setPokemons(result))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <table>
        <tbody>
          {pokemons.results &&
            pokemons.results.map((pokemon) => {
              return (
                <tr key={pokemon.name}>
                  <td>
                    <Link to={`/le-pokemon/${pokemon.name}`}>
                      {pokemon.name}
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
