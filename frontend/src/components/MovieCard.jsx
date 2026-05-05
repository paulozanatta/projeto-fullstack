import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function MovieCard({ filme }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={filme.Poster !== "N/A" ? filme.Poster : ""}
        alt={filme.Title}
      />

      <CardContent>
        <Typography variant="h6">{filme.Title}</Typography>
        <Typography variant="body2" color="text.secondary">
          Ano: {filme.Year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;