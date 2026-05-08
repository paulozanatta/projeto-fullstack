import { useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function SearchBar() {
  const [texto, setTexto] = useState("");

  const { buscarFilmes, erro } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    buscarFilmes(texto);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome do filme"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
        }}
      />

      <button type="submit">
        Buscar
      </button>

      {erro && (
        <p style={{ color: "red" }}>
          {erro}
        </p>
      )}
    </form>
  );
}

export default SearchBar;