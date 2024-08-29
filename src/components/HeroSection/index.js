import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from '../../background.jpeg'

const HeroSection = () => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
      margin:'25px',
      borderRadius:'20px'
    }}
  >
    <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "20px", borderRadius: "5px", width:'100%', height:'600px' }}>
      <Typography variant="h3" color="#000">MovieStreamer</Typography>
      <Typography variant="h5" color="#000">Enjoy Watching</Typography>
      <Box sx={{ display:'flex', justifyContent: "center" }}>
        <Typography variant="body1" color="#000" sx={{width:'50%'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerc. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerci.</Typography>
      </Box>
    </Box>
  </Box>
);

export default HeroSection;
