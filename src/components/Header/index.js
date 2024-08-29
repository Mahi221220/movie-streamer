import React from "react";
import { AppBar, Toolbar, Box, Typography, Button, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { CustomTextField } from './styles';

const Header = ({ setSearchQuery, onSignUpClick }) => {
  return (
    <AppBar position="sticky" color="inherit" style={{boxShadow:'none'}}>
      <Toolbar style={{justifyContent:'space-between'}}>
        <Box style={{ display: "flex", alignItems: "center", justifyContent:'space-between', width: '50%' }}>
          <Typography variant="h7" style={{ fontWeight:'bold' }}>
            MovieStreamer
          </Typography>
          <Button color="inherit" style={{textTransform: 'none'}}>Movies</Button>
          <Button color="inherit" style={{textTransform: 'none'}}>Series</Button>
          <Button color="inherit" style={{textTransform: 'none'}}>Contact</Button>
          <Button color="inherit" style={{textTransform: 'none'}}>About Us</Button>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <CustomTextField
            variant="outlined"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button color="#333" variant="outlined" onClick={onSignUpClick} style={{textTransform: 'none', borderRadius:10}}>
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
