import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieList() {
  const { filmes } = useContext(MovieContext);

  if (!filmes || filmes.length === 0) {
    return <p>Nenhum filme encontrado</p>;
  }

  return (
    <div>
      {filmes.map((filme) => (
        <div key={filme.imdbID}>
          <h3>{filme.Title}</h3>
        </div>
      ))}
    </div>
  );
}

export default MovieList;