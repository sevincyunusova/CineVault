# CineVault

CineVault is a responsive movie discovery web application built with React and the TMDB API.

The application allows users to discover popular movies, search for movies, filter movies by genre, view movie details, and manage a personal list of favorite movies.

## Features

* Responsive navigation bar
* Popular movies section
* Movie search
* Genre filtering
* Movie cards
* Movie details modal
* Add movies to favorites
* Remove movies from favorites
* Favorites persistence using localStorage
* Loading state
* Error state
* Empty search results state
* Responsive design for desktop and mobile
* TMDB API integration
* Smooth navigation between sections

## Technologies

* React
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite
* TMDB API
* React Icons
* Git
* GitHub

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Movies/
│   ├── MovieCard/
│   ├── Filters/
│   ├── Favorites/
│   ├── Footer/
│   └── UI/
│       └── MovieModal/
├── hooks/
├── pages/
├── services/
│   └── tmdbApi.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx

```

## API

Movie data is provided by The Movie Database (TMDB) API.

The application uses the TMDB API for:

- Popular movies
- Movie search
- Genre filtering

The API key is stored locally using a Vite environment variable.

Create a .env file in the project root:

VITE_TMDB_API_KEY=your_api_key_here

The .env file contains the private API key and is not included in the repository.

## Installation

Clone the repository and install the dependencies:

npm install

Run the development server:

npm run dev

Then open the local development URL provided by Vite.

## AI-Assisted Development

Claude was used as a development assistant throughout the implementation process.

AI assistance was used for:

React project structure
Component architecture
React state management
TMDB API integration
Feature implementation
Debugging
CSS improvements
Responsive design
Refactoring suggestions

AI-generated code was reviewed, tested, corrected, and modified during development.

## Manual Improvements

After reviewing AI-generated code, manual improvements and corrections were made throughout the project.

Examples include:

Fixing TMDB API response handling.
Correcting movie rendering after API integration.
Fixing environment variable configuration.
Testing API requests and correcting API-related issues.
Implementing and testing movie search.
Implementing genre filtering.
Fixing the Favorites functionality.
Making movies removable directly from the Favorites section.
Correcting the favorite heart state between movie cards and the Favorites section.
Adjusting the Navbar layout and spacing.
Adding smooth scrolling between sections.
Testing the application after each feature implementation.
Adjusting responsive layout and UI spacing.
Fixing component import and file path errors.

## AI Prompts

Examples of prompts used during development include:

Create a React project structure for a movie discovery application.
Build a responsive Navbar component for CineVault.
Create a Hero section with a movie search interface.
Integrate the TMDB API with the React application.
Implement fetching and displaying popular movies.
Implement movie search functionality.
Implement genre filtering using the TMDB API.
Create reusable MovieCard and Movies components.
Implement a Favorites system using React state and localStorage.
Allow users to add and remove movies from Favorites.
Create a Movie Details modal.
Make the application responsive for desktop and mobile devices.
Add loading and error states for API requests.
Debug React and API integration errors.
Improve the UI and add smooth scrolling.
Add a responsive footer with TMDB attribution.

## Purpose

This project was developed as a React practice assignment with AI-assisted development.

The main goal was to practice:

React components
Props
State management
React Hooks
API integration
Event handling
Conditional rendering
Rendering lists with map()
Searching and filtering data
localStorage
Responsive CSS
Git and GitHub workflow

## Credits

Movie data and images are provided by The Movie Database (TMDB).

This product uses the TMDB API but is not endorsed or certified by TMDB.