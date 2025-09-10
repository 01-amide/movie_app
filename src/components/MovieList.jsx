/**
 * MovieList Component
 * 
 * This component renders a responsive grid layout of movie cards.
 * It provides a clean, organized display of all movies in the collection
 * with responsive design that adapts to different screen sizes.
 * 
 * Features:
 * - Responsive grid layout (1-5 columns based on screen size)
 * - Consistent spacing between movie cards
 * - Maps through movies array to render individual MovieCard components
 * 
 * @param {Object} props - Component props
 * @param {Array} props.movies - Array of movie objects to display
 * @returns {JSX.Element} Grid layout containing movie cards
 */

// Import the MovieCard component for rendering individual movies
import MovieCard from "./MovieCard"

/**
 * MovieList Component Function
 * 
 * Creates a responsive grid layout for displaying movie cards.
 * The grid automatically adjusts the number of columns based on screen size:
 * - Small screens (sm): 1 column
 * - Medium screens (md): 2 columns  
 * - Large screens (lg): 3 columns
 * - Extra large screens (xl): 4 columns
 * - 2XL screens (2xl): 5 columns
 * 
 * @param {Object} props - Destructured props
 * @param {Array} props.movies - Array of movie objects to render
 */
const MovieList = ({movies}) => {
    return (
        // 
        // Responsive grid container with adaptive column layout
        // - gap-6: Consistent 1.5rem spacing between grid items
        // - Responsive breakpoints for different screen sizes
        //
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {/* 
                Map through movies array to render individual MovieCard components
                - Each movie object is spread as props to MovieCard
                - Index is used as key for React optimization
            */}
            {movies.map((movie, index) => (
                <MovieCard 
                    key={index} // React key for efficient re-rendering
                    {...movie} // Spread all movie properties as props
                />
            ))}
        </div>
    )
}

// Export the MovieList component as the default export
export default MovieList
