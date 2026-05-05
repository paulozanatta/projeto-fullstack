import { useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

import { TextField, Button, Box, Alert } from "@mui/material";

function SearchBar() {
  const [texto, setTexto] = useState("");
  const { buscarFilmes, erro } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    buscarFilmes(texto);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          fullWidth
          label="Digite o nome do filme"
          variant="outlined"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <Button variant="contained" type="submit">
          Buscar
        </Button>
      </Box>

      {erro && <Alert severity="error" sx={{ mt: 2 }}>{erro}</Alert>}
    </Box>
  );
}

export default SearchBar;