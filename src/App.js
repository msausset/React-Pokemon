import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
