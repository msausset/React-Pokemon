import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LePokemon from "./components/LePokemon";
import EvolutionPokemon from "./components/EvolutionPokemon";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/le-pokemon/:pokemon" element={<LePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
