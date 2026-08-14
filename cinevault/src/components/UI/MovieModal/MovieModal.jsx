import {
  FaStar,
  FaTimes,
  FaHeart,
} from "react-icons/fa"

import "./MovieModal.css"

function MovieModal({
  movie,
  favorites,
  onClose,
  onAddFavorite,
  onRemoveFavorite,
}) {
  if (!movie) {
    return null
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : ""

  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A"

  const rating = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : "N/A"

  const isFavorite = favorites.some(
    (favorite) => favorite.id === movie.id
  )

  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFavorite(movie.id)
    } else {
      onAddFavorite(movie)
    }
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="movie-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="modal-poster">
          {posterUrl && (
            <img
              src={posterUrl}
              alt={movie.title}
            />
          )}
        </div>

        <div className="modal-content">
          <h2>{movie.title}</h2>

          <div className="modal-meta">
            <span>{releaseYear}</span>

            <span className="modal-rating">
              <FaStar />
              {rating}
            </span>
          </div>

          <p className="modal-overview">
            {movie.overview ||
              "No description available."}
          </p>

          <button
            className={`add-favorite-button ${
              isFavorite ? "favorite-active" : ""
            }`}
            onClick={handleFavoriteClick}
          >
            <FaHeart />

            {isFavorite
              ? "Remove from Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieModal