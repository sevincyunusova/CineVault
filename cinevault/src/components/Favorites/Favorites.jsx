import MovieCard from "../MovieCard/MovieCard"
import "./Favorites.css"

function Favorites({
  favorites,
  onMovieClick,
  onRemoveFavorite,
}) {
  return (
    <section className="favorites" id="favorites">
      <div className="favorites-header">
        <span className="section-label">
          YOUR COLLECTION
        </span>

        <h2>Favorite Movies</h2>
      </div>

      {favorites.length === 0 ? (
        <p className="favorites-empty">
          You haven't added any movies to your favorites yet.
        </p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <div
              className="favorite-card-wrapper"
              key={movie.id}
            >
              <MovieCard
                movie={movie}
                onMovieClick={onMovieClick}
              />

              <button
                className="remove-favorite"
                onClick={() => onRemoveFavorite(movie.id)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Favorites