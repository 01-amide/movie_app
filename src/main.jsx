/**
 * Main Entry Point for MovieApp React Application
 * 
 * This file serves as the entry point for the React application.
 * It initializes the React application by:
 * 1. Creating a React root using the new React 18 createRoot API
 * 2. Rendering the main App component wrapped in StrictMode
 * 3. Mounting the application to the DOM element with id 'root'
 * 
 * StrictMode is used to help identify potential problems in the application
 * during development by enabling additional checks and warnings.
 * 
 * @fileoverview React application entry point
 * @version 1.0.0
 * @author React Hooks Project
 */

// React imports
import { StrictMode } from 'react' // StrictMode for development checks
import { createRoot } from 'react-dom/client' // React 18 createRoot API

// Application imports
import './index.css' // Global CSS styles and Tailwind imports
import App from './App.jsx' // Main App component

/**
 * Application Initialization
 * 
 * Creates a React root and renders the App component.
 * The createRoot API is the recommended way to render React applications
 * in React 18 and provides better performance and concurrent features.
 * 
 * @param {HTMLElement} rootElement - The DOM element with id 'root' from index.html
 */
createRoot(document.getElementById('root')).render(
  // StrictMode wrapper for development-time checks and warnings
  <StrictMode>
    {/* Main App component - the root of our application */}
    <App />
  </StrictMode>,
)
