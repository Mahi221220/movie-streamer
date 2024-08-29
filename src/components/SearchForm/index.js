import React, { useState } from "react";
import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = ({ setSearchQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(input);
  };

  return (
    <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setInput(e.target.value)}
        style={{ color: "inherit", marginRight: "10px" }}
      />
      <IconButton type="submit" color="inherit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchForm;
