import MovieCard from "../MovieCard/MovieCard"

import "./Favorites.css"

function Favorites({
  favorites,
  onMovieClick,
  onRemoveFavorite,
}) {
  return (
    <section
      className="favorites"
      id="favorites"
    >
      <div className="favorites-header">
        <div>
          <span className="section-label">
            YOUR COLLECTION
          </span>

          <h2>Favorite Movies</h2>
        </div>

        <span className="favorites-count">
          {favorites.length} movies
        </span>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <p>
            You haven't added any movies to your
            favorites yet.
          </p>
        </div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={onMovieClick}
              onAddFavorite={() => {}}
              onRemoveFavorite={onRemoveFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Favorites