import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MovieCard from "./MovieCard";

function MovieList() {
  const { filmes, loading } = useContext(MovieContext);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      {filmes.map((filme) => (
        <MovieCard key={filme.imdbID} filme={filme} />
      ))}
    </div>
  );
}

export default MovieList;