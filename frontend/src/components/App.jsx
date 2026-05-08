import "./App.css";

import { MovieProvider } from "../contexts/MovieContext";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

function App() {
  return (
    <MovieProvider>
      <div style={{ padding: "20px" }}>
        <h1>🎬 Buscador de Filmes</h1>

        <SearchBar />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;