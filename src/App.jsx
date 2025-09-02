import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import movies from "./data/movies";
import Filter from "./components/Filter";
import { Search } from "lucide-react";

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
    setNewMovie({ title: "", description: "", posterUrl: "", rating: "" });
  };

  return (
    <div className="bg-gray-950 min-h-screen text-gray-100 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow-lg">
        <h1 className="text-2xl font-bold text-yellow-400">🎬 MovieApp</h1>
        <ul className="flex gap-6 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Movies</li>
          <li className="hover:text-yellow-400 cursor-pointer">Favorites</li>
          <li className="hover:text-yellow-400 cursor-pointer">Search</li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-center gap-4 px-6 py-6">
        <div className="relative w-full md:w-[250px]">
          <Search className="absolute top-3 left-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search movies..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-gray-800 text-gray-100 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none shadow"
          />
        </div>

        <div className="relative w-full md:w-[250px]">
          <Search className="absolute top-3 left-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-gray-800 text-gray-100 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none shadow"
          />
        </div>
      </div>

      {/* Add Movie Form */}
      <div className="max-w-lg mx-auto bg-gray-900 rounded-2xl shadow-xl p-6 mb-8">
        <p className="text-xl font-bold mb-4 text-center text-yellow-400">
          Add New Movie
        </p>
        <form onSubmit={handleAddNewMovie} className="flex flex-col gap-4">
          <input
            type="text"
            value={newMovie.title}
            onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
            placeholder="Title"
            className="p-2 bg-gray-800 rounded-lg text-gray-100 outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            value={newMovie.description}
            placeholder="Description"
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
            className="p-2 bg-gray-800 rounded-lg text-gray-100 outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            value={newMovie.posterUrl}
            placeholder="Poster URL"
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterUrl: e.target.value })
            }
            className="p-2 bg-gray-800 rounded-lg text-gray-100 outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: e.target.value })
            }
            value={newMovie.rating}
            placeholder="Rating"
            className="p-2 bg-gray-800 rounded-lg text-gray-100 outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition"
          >
            Add Movie
          </button>
        </form>
      </div>

      {/* Movie List */}
      <div className="px-6">
        {title || rating ? (
          <Filter movies={allMovies} title={title} rating={rating} />
        ) : (
          <MovieList movies={allMovies} />
        )}
      </div>
    </div>
  );
}

export default App;
