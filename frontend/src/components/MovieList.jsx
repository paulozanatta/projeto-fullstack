import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MovieCard from "./MovieCard";

function MovieList() {
  const { filmes, loading } = useContext(MovieContext);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!filmes || filmes.length === 0) {
    return <p>Nenhum filme encontrado</p>;
  }

  return (
    <div className="movie-grid">
      {filmes.map((filme) => (
        <MovieCard key={filme.imdbID} filme={filme} />
      ))}
    </div>
  );
}

export default MovieList;