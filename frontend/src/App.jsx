import { MovieProvider } from "../contexts/MovieContext";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

import { Container, Typography } from "@mui/material";

function App() {
  return (
    <MovieProvider>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          🎬 Buscador de Filmes
        </Typography>

        <SearchBar />
        <MovieList />
      </Container>
    </MovieProvider>
  );
}

export default App;