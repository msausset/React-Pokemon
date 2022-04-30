import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LePokemon from "./components/LePokemon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/le-pokemon/:pokemon" element={<LePokemon />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
