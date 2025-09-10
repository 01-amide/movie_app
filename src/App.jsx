/**
 * MovieApp - A React application for managing and displaying movies
 * 
 * This is the main component that handles:
 * - Movie state management using React hooks
 * - Search and filtering functionality
 * - Adding new movies to the collection
 * - Rendering the complete UI layout
 * 
 * @author React Hooks Project
 * @version 1.0.0
 */

// React imports
import { useState } from "react";

// Component imports
import "./App.css";
import MovieList from "./components/MovieList";
import movies from "./data/movies";
import Filter from "./components/Filter";

// Icon imports from Lucide React
import { Search } from "lucide-react";

/**
 * Main App Component
 * 
 * This component serves as the root of the application and manages all state
 * related to movies, search functionality, and form handling.
 * 
 * @returns {JSX.Element} The complete movie application UI
 */
function App() {
  // State management using React hooks
  
  /**
   * State for managing the complete list of movies
   * - Initialized with the imported movies data
   * - Updated when new movies are added
   */
  const [allMovies, setAllMovies] = useState(movies);
  
  /**
   * State for the title search input
   * - Used to filter movies by title
   * - Controlled input that updates in real-time
   */
  const [title, setTitle] = useState("");
  
  /**
   * State for the rating filter input
   * - Used to filter movies by maximum rating
   * - Accepts numeric values for filtering
   */
  const [rating, setRating] = useState("");
  
  /**
   * State for the new movie form
   * - Manages all form fields for adding a new movie
   * - Resets after successful submission
   */
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });

  /**
   * Handles the submission of the new movie form
   * 
   * This function:
   * - Prevents the default form submission behavior
   * - Creates a new movie object with proper data types
   * - Adds the new movie to the existing movies array
   * - Resets the form fields to empty values
   * 
   * @param {Event} e - The form submission event
   */
  const handleAddNewMovie = (e) => {
    // Prevent default form submission to handle it manually
    e.preventDefault();
    
    // Create a new movie object with proper data types
    const movieToAdd = {
      title: newMovie.title,
      description: newMovie.description,
      posterUrl: newMovie.posterUrl,
      rating: Number(newMovie.rating) || 0, // Convert to number, default to 0 if invalid
    };
    
    // Add the new movie to the existing movies array using spread operator
    setAllMovies([...allMovies, movieToAdd]);
    
    // Reset the form fields to empty values
    setNewMovie({ title: "", description: "", posterUrl: "", rating: "" });
  };

  return (
    // Main application container with dark theme styling
    <div className="bg-gray-950 min-h-screen text-gray-100 font-sans">
      {/* 
        Navigation Bar
        - Fixed header with app title and navigation links
        - Uses dark gray background with yellow accent color
        - Responsive design with hover effects
      */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow-lg">
        {/* App title with movie emoji for visual appeal */}
        <h1 className="text-2xl font-bold text-yellow-400">🎬 MovieApp</h1>
        
        {/* Navigation menu with hover effects */}
        <ul className="flex gap-6 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Movies</li>
          <li className="hover:text-yellow-400 cursor-pointer">Favorites</li>
          <li className="hover:text-yellow-400 cursor-pointer">Search</li>
        </ul>
      </nav>

      {/* 
        Search and Filter Section
        - Two input fields for searching by title and filtering by rating
        - Responsive design that stacks on mobile, side-by-side on desktop
        - Real-time filtering as user types
      */}
      <div className="flex flex-col md:flex-row justify-center gap-4 px-6 py-6">
        {/* Title Search Input */}
        <div className="relative w-full md:w-[250px]">
          {/* Search icon positioned absolutely inside the input */}
          <Search className="absolute top-3 left-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search movies..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-gray-800 text-gray-100 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none shadow"
          />
        </div>

        {/* Rating Filter Input */}
        <div className="relative w-full md:w-[250px]">
          {/* Search icon for visual consistency */}
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

      {/* 
        Add New Movie Form
        - Centered form with dark styling to match the theme
        - Collects all necessary movie information
        - Uses controlled inputs with real-time state updates
      */}
      <div className="max-w-lg mx-auto bg-gray-900 rounded-2xl shadow-xl p-6 mb-8">
        {/* Form title with accent color */}
        <p className="text-xl font-bold mb-4 text-center text-yellow-400">
          Add New Movie
        </p>
        
        {/* Form with submission handler */}
        <form onSubmit={handleAddNewMovie} className="flex flex-col gap-4">
          {/* Movie Title Input */}
          <input
            type="text"
            value={newMovie.title}
            onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
            placeholder="Title"
            className="p-2 bg-gray-800 rounded-lg text-gray-100 outline-none focus:ring-2 focus:ring-yellow-400"
          />
          
          {/* Movie Description Input */}
          <input
            type="text"
            value={newMovie.description}
            placeholder="Description"
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
            className="p-2 bg-gray-800 rounded-lg text-gray-100 outline-none focus:ring-2 focus:ring-yellow-400"
          />
          
          {/* Movie Poster URL Input */}
          <input
            type="text"
            value={newMovie.posterUrl}
            placeholder="Poster URL"
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterUrl: e.target.value })
            }
            className="p-2 bg-gray-800 rounded-lg text-gray-100 outline-none focus:ring-2 focus:ring-yellow-400"
          />
          
          {/* Movie Rating Input */}
          <input
            type="text"
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: e.target.value })
            }
            value={newMovie.rating}
            placeholder="Rating"
            className="p-2 bg-gray-800 rounded-lg text-gray-100 outline-none focus:ring-2 focus:ring-yellow-400"
          />
          
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition"
          >
            Add Movie
          </button>
        </form>
      </div>

      {/* 
        Movie Display Section
        - Conditionally renders either filtered results or all movies
        - Uses Filter component when search/filter criteria are active
        - Uses MovieList component to display all movies when no filters applied
      */}
      <div className="px-6">
        {/* Conditional rendering based on search/filter state */}
        {title || rating ? (
          // Show filtered results when search criteria are active
          <Filter movies={allMovies} title={title} rating={rating} />
        ) : (
          // Show all movies when no search/filter is applied
          <MovieList movies={allMovies} />
        )}
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;
