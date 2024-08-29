import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Typography, Box, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MovieCard from "../MovieCard";
import HeroSection from '../HeroSection'
import Slider from "react-slick";

const API_KEY = "77a40ad6";

const MovieCategorySlider = ({ searchQuery, onSignUpClick }) => {
  const [movies, setMovies] = useState([]);
  const sliderRefs = useRef({}); // Reference for multiple sliders

  useEffect(() => {
    const fetchMovies = async () => {
      const genres = ["Action", "Drama", "Comedy", "Thriller"];
      let allMovies = [];

      for (const genre of genres) {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${genre}&apikey=${API_KEY}`
        );
        if (response.data.Search) {
          allMovies = [
            ...allMovies,
            ...response.data.Search.map((movie) => ({ ...movie, genre })),
          ];
        }
      }

      setMovies(allMovies);
    };

    fetchMovies();
  }, []);

  const filteredMovies = searchQuery
    ? movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : movies;

  const genres = [...new Set(movies.map((movie) => movie.genre))];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };

  const handleNextSlide = (genre) => {
    sliderRefs.current[genre].slickNext();
  };

  return (
    <>
      <HeroSection />
      <Box>
        {genres.map((genre) => (
          <Box key={genre} style={{ margin: "20px" }}>
            <Box display="flex" alignItems="center">
              <Typography variant="h5" gutterBottom style={{ marginLeft: "20px" }}>
                {genre}
              </Typography>
              <IconButton
                onClick={() => handleNextSlide(genre)}
                style={{ marginLeft: "auto" }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
            <Slider
              ref={(slider) => (sliderRefs.current[genre] = slider)}
              {...settings}
            >
              {filteredMovies
                .filter((movie) => movie.genre === genre)
                .map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </Slider>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MovieCategorySlider;
