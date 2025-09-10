/**
 * Movies Data Module
 * 
 * This module contains the initial movie data for the MovieApp application.
 * It exports an array of movie objects, each containing the necessary
 * information to display movie cards in the application.
 * 
 * Each movie object follows this structure:
 * - title: String - The movie title
 * - description: String - Brief description of the movie plot
 * - posterUrl: String - URL to the movie poster image
 * - rating: Number - Movie rating (typically 0-10 scale)
 * 
 * This data serves as the initial state for the movies array in the App component
 * and can be extended with additional movies or modified as needed.
 * 
 * @fileoverview Initial movie data for the MovieApp React application
 * @version 1.0.0
 * @author React Hooks Project
 */

/**
 * Array of movie objects containing movie information
 * 
 * This array serves as the initial data source for the movie application.
 * Each object represents a single movie with all necessary display properties.
 * 
 * @type {Array<Object>} Array of movie objects
 * @property {string} title - Movie title
 * @property {string} description - Movie description/synopsis
 * @property {string} posterUrl - URL to movie poster image
 * @property {number} rating - Movie rating (0-10 scale)
 */
const movies = [
    // Iron Man - First movie in the Marvel Cinematic Universe
    {
        title: "Iron Man",
        description: "The life of Tony Stark before his death",
        posterUrl: "https://c8.alamy.com/comp/DXD67A/iron-man-3-DXD67A.jpg",
        rating: 9.5
    },
    
    // The Dark Knight - Christopher Nolan's Batman masterpiece
    { 
        title: "The Dark Knight",
        description: "Batman faces the Joker in Gotham City",
        posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
        rating: 9.0
    },
    
    // Inception - Mind-bending sci-fi thriller
    { 
        title: "Inception",
        description: "A skilled thief enters dreams to steal secrets",
        posterUrl: "https://flhsnavigator.com/wp-content/uploads/2021/10/url-4.jpeg?w=691",
        rating: 8.8
    },
    
    // Black Panther - Groundbreaking Marvel superhero film
    { 
        title: "Black Panther",
        description: "T'Challa returns to Wakanda to claim the throne",
        posterUrl: "https://musicart.xboxlive.com/7/86f05000-0000-0000-0000-000000000002/504/image.jpg",
        rating: 8.5
    },
    
    // Avengers: Endgame - Epic conclusion to the Infinity Saga
    { 
        title: "Avengers: Endgame",
        description: "Earth's mightiest heroes face Thanos for the final battle",
        posterUrl: "https://images-cdn.ubuy.co.in/633feb99b0c4240a6e30e463-poster-stop-online-avengers-endgame.jpg",
        rating: 9.3
    }
];

// Export the movies array as the default export
export default movies;