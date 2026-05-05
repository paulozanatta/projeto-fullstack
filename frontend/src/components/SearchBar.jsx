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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome do filme"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {/* Mensagem de erro (validação + API) */}
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
}

export default SearchBar;