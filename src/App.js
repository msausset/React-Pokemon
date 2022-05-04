import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LePokemon from "./components/LePokemon";
import DescriptionPokemon from "./components/DescriptionPokemon";
import InfosPokemons from "./components/InfosPokemon"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/le-pokemon/:pokemon" element={<LePokemon />}>
          <Route path="/le-pokemon/:pokemon" element={<DescriptionPokemon />} />
          <Route path="/le-pokemon/:pokemon" element={<InfosPokemons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
