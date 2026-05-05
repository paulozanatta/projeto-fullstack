function MovieCard({ filme }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{filme.Title}</h3>
      <p>Ano: {filme.Year}</p>
      <img src={filme.Poster} alt={filme.Title} width="150" />
    </div>
  );
}

export default MovieCard;