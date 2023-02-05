import React, { useEffect, useState } from "react";
import "./App.css";
import Searchicon from "./SearchIcon.svg";
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=4838da9b";

// key=4838da9b
const App = () => {
  const [movies, setMovies] = useState([]);
  const [SearchTerm, setSearchterm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieKingdom</h1>
      <div className="search">
        <input
          placeholder="Search the movie"
          value={SearchTerm}
          onChange={(e) => {
            setSearchterm(e.target.value);
          }}
        />
        <img
          src={Searchicon}
          alt="search"
          onClick={() => searchMovies(SearchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
