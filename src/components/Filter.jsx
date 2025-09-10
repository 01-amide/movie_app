/**
 * Filter Component
 * 
 * This component handles the filtering and display of movies based on search criteria.
 * It provides two types of filtering:
 * 1. Title filtering - searches for movies containing the search term (case-insensitive)
 * 2. Rating filtering - shows movies with ratings less than or equal to the specified rating
 * 
 * The component uses a conditional rendering approach to apply different filter combinations
 * based on whether a rating filter is provided.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.movies - Array of movie objects to filter
 * @param {string} props.title - Search term for filtering by movie title
 * @param {string} props.rating - Maximum rating threshold for filtering
 * @returns {JSX.Element} Filtered list of movie cards
 */

// Import the MovieCard component for rendering individual movies
import MovieCard from "./MovieCard"

/**
 * Filter Component Function
 * 
 * @param {Object} props - Destructured props
 * @param {Array} props.movies - Complete array of movies to filter from
 * @param {string} props.title - Title search term (case-insensitive matching)
 * @param {string} props.rating - Rating threshold (movies with rating <= this value)
 */
const Filter = ({ movies, title, rating }) => {
    return (
        // Container for filtered movie cards with responsive flex layout
        <div className="flex gap-3 flex-wrap">
            {/* 
                Conditional filtering logic:
                - If rating filter is provided: apply both title and rating filters
                - If no rating filter: apply only title filter
            */}
            {rating ? (
                // Filter with both title and rating criteria
                movies
                    // First filter: Title search (case-insensitive)
                    .filter((movie) =>
                        movie.title.toLowerCase().includes(title.toLowerCase())
                    )
                    // Second filter: Rating threshold (less than or equal to specified rating)
                    .filter((movie) => movie.rating <= rating)
                    // Map filtered results to MovieCard components
                    .map((movie, index) => (
                        <MovieCard 
                            key={index} // Add key prop for React optimization
                            {...movie} // Spread all movie properties as props
                        />
                    ))
            ) : (
                // Filter with only title criteria (no rating filter)
                movies
                    // Apply title filter (case-insensitive)
                    .filter((movie) =>
                        movie.title.toLowerCase().includes(title.toLowerCase())
                    )
                    // Map filtered results to MovieCard components
                    .map((movie, index) => (
                        <MovieCard 
                            key={index} // Add key prop for React optimization
                            {...movie} // Spread all movie properties as props
                        />
                    ))
            )}
        </div>
    )
}

// Export the Filter component as the default export
export default Filter
