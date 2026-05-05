import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MovieCard from "./MovieCard";

import { Grid, CircularProgress, Box } from "@mui/material";

function MovieList() {
  const { filmes, loading } = useContext(MovieContext);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={3}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {filmes.map((filme) => (
        <Grid item xs={12} sm={6} md={4} key={filme.imdbID}>
          <MovieCard filme={filme} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;