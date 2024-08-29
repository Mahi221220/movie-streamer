import React from "react";
import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from './styles';

const MovieCard = ({ movie }) => (
  <Card style={{ margin: "10px", maxWidth: "220px", boxShadow:'none' }}>
    <CardMedia
      component="img"
      height="310"
      image={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/220x310"}
      alt={movie.Title}
      style={{borderRadius:'20px'}}
    />
    <CustomButton component={Link} to={`/movie/${movie.imdbID}`} size="small" color="primary">
      {movie.Title}
    </CustomButton>
  </Card>
);

export default MovieCard;
