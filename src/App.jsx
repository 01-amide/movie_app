
import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import movies from './data/movies';

function App() {
  const [allMovies, setAllMovies] = useState(movies);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  // const [search, setSearch] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSearch(true)
  // }
  return (
    <>
      <MovieList movies={allMovies}/>
    </>
  );
}

export default App
