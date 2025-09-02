
import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import movies from './data/movies';
import Filter from './components/Filter';

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
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #ccc',
            borderRadius: '5px',
            width: '50%',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        />
      </div>
      
      {title || rating ? (
        <Filter movies={allMovies} title={title} rating={rating} />
      ) : (
        <MovieList movies={allMovies} />
      )}
    </>
  );
}

export default App
