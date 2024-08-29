import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Grid, Chip, Box, Button } from "@mui/material";

const API_KEY = "77a40ad6";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      setMovie(response.data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const availableLanguages = ["English", "Hindi", "Tamil", "Telugu", "Kannada"];

  return (
    <div>
       <Box
        sx={{
          backgroundImage: `url(${movie.Poster})`,
          backgroundSize: "cover",
          height: "600px",
          display: "flex",
          justifyContent: "flex-start",
          color: "white",
          textAlign: "center",
          margin:'25px',
          borderRadius:'20px'
        }}
      >
        <Box sx={{ 
          display: "flex",
          flexDirection:'column',
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "120px",
          borderRadius: "5px",
          width:'100%',
          height:'auto'
        }}>
          <Typography variant="h3" color="#000" sx={{ fontWeight: "bold", marginBottom: '20px' }}>{movie.Title}</Typography>
          <Typography variant="body1" color="#000" sx={{ maxWidth: "400px", marginBottom: "20px", textAlign:'left' }}>
            {movie.Plot}
          </Typography>
          <Button variant="contained" color="primary" sx={{ backgroundColor: "#000", borderRadius:20, textTransform:'none' }}>
            Play Now
          </Button>
        </Box>
      </Box>

      <Box sx={{ padding: "20px 40px", margin:'25px', backgroundColor: "#f5f5f5", borderRadius: "20px", }}>
        <Typography variant="subtitle1" color="#999999" sx={{ marginBottom: "10px"}}>
          Description
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {movie.Plot}
        </Typography>
      </Box>

      <Box sx={{ padding: "20px 40px", margin:'25px', backgroundColor: "#f5f5f5", borderRadius: "20px", }}>
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="subtitle1" color="#999999" sx={{ marginBottom: "10px"}}>
            Released Year
          </Typography>
          <Typography variant="body1">{movie.Year}</Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="subtitle1" color="#999999" sx={{ marginBottom: "10px"}}>
            Available Languages
          </Typography>
          {availableLanguages.map((lang, index) => (
            <Chip
              key={index}
              label={lang}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                margin: "5px",
                borderRadius:'10px'
              }}
            />
          ))}
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="subtitle1" color="#999999" sx={{ marginBottom: "10px"}}>
            Ratings
          </Typography>
          <Box sx={{ display:'flex', gap: '20px'}}>
            <Box sx={{ background: '#d4d4d4', padding:'10px', borderRadius:'10px', width:'50%' }}>
              <Typography variant="body2" sx={{ marginRight: "10px" }}>
                IMDb
              </Typography>
              <Box sx={{ display: "flex" }}>
                {[...Array(5)].map((_, index) => (
                  <span key={index} style={{ color: index < movie.imdbRating / 2 ? "#e60000" : "#999999" }}>★</span>
                ))}
              </Box>
            </Box>
            <Box sx={{ background: '#d4d4d4', padding:'10px', borderRadius:'10px', width:'50%' }}>
              <Typography variant="body2" sx={{ marginRight: "10px" }}>
                Streamvibe
              </Typography>
              <Box sx={{ display: "flex" }}>
                {[...Array(5)].map((_, index) => (
                  <span key={index} style={{ color: index < 4 ? "#e60000" : "#999999" }}>★</span>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="subtitle1" color="#999999" sx={{ marginBottom: "10px"}}>
            Genres
          </Typography>
          {movie.Genre.split(", ").map((genre, index) => (
            <Chip key={index} label={genre} sx={{
              backgroundColor: "#000",
              color: "#fff",
              margin: "5px",
              borderRadius:'10px'
            }} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default MovieDetails;
