import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieCategorySlider from "./components/MovieCategorySlider";
import MovieDetails from "./components/MovieDetails";
import SignUpModal from "./components/SignUpModal";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);

  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} onSignUpClick={handleSignUpOpen} />
      <Routes>
        <Route path="/" element={<MovieCategorySlider searchQuery={searchQuery} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <SignUpModal open={isSignUpOpen} onClose={handleSignUpClose} />
    </Router>
  );
};

export default App;
