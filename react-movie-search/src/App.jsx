import {useState, useEffect} from "react";
//import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "98e3fb1f";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {

    try{
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  }catch(err) {
    console.error(err);
  }
  };

  // This will run on the first render but not on subsquent renders
  const movies = [
  "Clueless",
  "Bugs",
  "Titanic",
  "The Matrix",
  "Fight Club",
  "Avatar",
  "Jaws",
  "The Lion King",
  "Forrest Gump",
  "Interstellar",
  "Shrek",
  "Frozen",
  "The Dark Knight",
];

useEffect(() => {
  const randomMovie =
    movies[Math.floor(Math.random() * movies.length)];

  getMovie(randomMovie);

  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
