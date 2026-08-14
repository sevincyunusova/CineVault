import {
  FaStar,
  FaTimes,
  FaHeart,
} from "react-icons/fa"

import "./MovieModal.css"

const genreNames = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
}

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
    : "https://via.placeholder.com/500x750?text=No+Image"

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : ""

  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A"

  const rating = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : "N/A"

  const genres = movie.genre_ids
    ? movie.genre_ids
        .map((genreId) => genreNames[genreId])
        .filter(Boolean)
    : []

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
        {backdropUrl && (
          <div
            className="modal-backdrop"
            style={{
              backgroundImage: `url(${backdropUrl})`,
            }}
          />
        )}

        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="modal-body">
          <div className="modal-poster">
            <img
              src={posterUrl}
              alt={movie.title}
            />
          </div>

          <div className="modal-content">
            <span className="modal-label">
              MOVIE DETAILS
            </span>

            <h2>{movie.title}</h2>

            <div className="modal-meta">
              <span>{releaseYear}</span>

              <span className="modal-rating">
                <FaStar />
                {rating}
              </span>
            </div>

            {genres.length > 0 && (
              <div className="modal-genres">
                {genres.map((genre) => (
                  <span key={genre}>
                    {genre}
                  </span>
                ))}
              </div>
            )}

            <p className="modal-overview">
              {movie.overview ||
                "No description available for this movie."}
            </p>

            <button
              className={`add-favorite-button ${
                isFavorite
                  ? "favorite-active"
                  : ""
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
    </div>
  )
}

export default MovieModal