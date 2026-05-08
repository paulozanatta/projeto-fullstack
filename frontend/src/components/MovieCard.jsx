function MovieCard({ filme }) {
  return (
    <div className="movie-card">
      <img
        src={
          filme.Poster !== "N/A"
            ? filme.Poster
            : "https://via.placeholder.com/300x450?text=Sem+Imagem"
        }
        alt={filme.Title}
      />

      <div className="movie-info">
        <h3>{filme.Title}</h3>
        <p>{filme.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;