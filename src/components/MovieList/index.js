import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Container } from "@mui/material";
import MovieCard from "../MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get("https://freetestapi.com/api/v1/movies");
      setMovies(response.data);
    };
    fetchMovies();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Popular Movies
      </Typography>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
