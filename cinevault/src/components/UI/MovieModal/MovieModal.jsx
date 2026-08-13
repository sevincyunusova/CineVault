import { FaStar, FaTimes } from "react-icons/fa"
import "./MovieModal.css"

function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : ""

  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A"

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="movie-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
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
              {movie.vote_average.toFixed(1)}
            </span>
          </div>

          <p className="modal-overview">
            {movie.overview || "No description available."}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieModal