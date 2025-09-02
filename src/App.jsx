
import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import movies from './data/movies';
import Filter from './components/Filter';

function App() {
  const [allMovies, setAllMovies] = useState(movies);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });


  const handleAddNewMovie = (e) => {
    e.preventDefault();
    const movieToAdd = {
      title: newMovie.title,
      description: newMovie.description,
      posterUrl: newMovie.posterUrl,
      rating: Number(newMovie.rating) || 0,
    };
    setAllMovies([...allMovies, movieToAdd]);

    setNewMovie({
      title: "",
      description: "",
      posterUrl: "",
      rating: "",
    });
  }
  return (
    <>
    <div className='flex justify-between'>
    <div className='flex justify-left m-5'>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search movies..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2.5 text-base border-2 border-gray-300 rounded w-[200px] bg-white shadow"
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="search by rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="p-2.5 text-base border-2 border-gray-300 rounded w-[200px] bg-white shadow"
        />
      </div>
      </div>

      <div>
          <p className=' font-bold text-center'>Add New Movie</p>
          <form onSubmit={handleAddNewMovie}>
            <input
              type="text"
              value={newMovie.title}
              onChange={(e) =>
                setNewMovie({ ...newMovie, title: e.target.value })
              }
              placeholder="title"
            />
            <input
              type="text"
              value={newMovie.description}
              placeholder="description"
              onChange={(e) =>
                setNewMovie({ ...newMovie, description: e.target.value })
              }
            />
            <input
              type="text"
              value={newMovie.posterUrl}
              placeholder="posterUrl"
              onChange={(e) =>
                setNewMovie({ ...newMovie, posterUrl: e.target.value })
              }
            />
            <input
              type="text"
              onChange={(e) =>
                setNewMovie({ ...newMovie, rating: e.target.value })
              }
              value={newMovie.rating}
              placeholder="rating"
            />
            <button type="submit">Add movie</button>
          </form>
        </div>
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
