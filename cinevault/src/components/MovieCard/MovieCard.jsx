import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa"

import "./MovieCard.css"

function MovieCard({
  movie,
  onMovieClick,
  onAddFavorite,
  isFavorite,
}) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image"

  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A"

  const rating = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : "N/A"

  const handleFavoriteClick = (event) => {
    event.stopPropagation()

    if (!isFavorite) {
      onAddFavorite(movie)
    }
  }

  return (
    <article
      className="movie-card"
      onClick={() => onMovieClick(movie)}
    >
      <div className="movie-poster-container">
        <img
          src={posterUrl}
          alt={movie.title}
          className="movie-poster"
        />

        <button
          className={`favorite-button ${
            isFavorite ? "active" : ""
          }`}
          onClick={handleFavoriteClick}
          aria-label={
            isFavorite
              ? "Already in favorites"
              : "Add to favorites"
          }
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>

        <div className="movie-rating">
          <FaStar />
          <span>{rating}</span>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <span className="movie-year">
          {releaseYear}
        </span>
      </div>
    </article>
  )
}

export default MovieCard