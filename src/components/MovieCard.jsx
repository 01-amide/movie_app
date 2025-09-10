/**
 * MovieCard Component
 * 
 * This component renders an individual movie card with:
 * - Movie poster image
 * - Movie title and description
 * - Star rating display
 * - Hover effects and animations
 * 
 * The component uses default props to handle missing data gracefully,
 * ensuring the UI remains consistent even with incomplete movie information.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Movie title (default: "Unknown")
 * @param {string} props.description - Movie description (default: "No description")
 * @param {string} props.posterUrl - URL for movie poster image (default: placeholder image)
 * @param {number} props.rating - Movie rating (default: 0.0)
 * @returns {JSX.Element} Individual movie card component
 */

// Import the Star icon from Lucide React for rating display
import { Star } from "lucide-react";

/**
 * MovieCard Component Function
 * 
 * Renders a single movie card with poster, title, description, and rating.
 * Uses destructuring with default values to handle missing props gracefully.
 * 
 * @param {Object} props - Destructured props with default values
 */
const MovieCard = ({
  title = "Unknown", // Default title if not provided
  description = "No description", // Default description if not provided
  posterUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OFdYEiUBHCvCWNHWq5OeMX0nh7P5sdviSg&s", // Default placeholder image
  rating = 0.0, // Default rating if not provided
}) => {
  return (
    // Main card container with dark theme styling and hover effects
    <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300">
      {/* 
        Movie Poster Image
        - Fixed height with object-cover to maintain aspect ratio
        - Rounded top corners to match card design
        - Alt text for accessibility
      */}
      <img
        src={posterUrl}
        alt={title}
        className="w-full h-64 object-cover rounded-t-2xl"
      />
      
      {/* 
        Movie Information Section
        - Centered content with padding
        - Contains title and description
      */}
      <div className="p-4 flex flex-col items-center text-center">
        {/* Movie Title - Bold white text with margin bottom */}
        <p className="font-bold text-lg text-white mb-2">{title}</p>
        
        {/* 
          Movie Description
          - Smaller gray text with line clamping for consistent height
          - Truncates long descriptions to 2 lines
        */}
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
      </div>
      
      {/* 
        Rating Display Section
        - Centered star icon and rating number
        - Yellow star with filled background
        - Bold white text for the rating value
      */}
      <div className="flex items-center justify-center gap-1 pb-3">
        {/* Star icon with yellow color and filled background */}
        <Star className="text-yellow-400" size={18} fill="yellow" />
        
        {/* Rating number in bold white text */}
        <p className="font-bold text-white">{rating}</p>
      </div>
    </div>
  );
};

// Export the MovieCard component as the default export
export default MovieCard;

