import "./Movies.css"

import MovieCard from "../MovieCard/MovieCard"
import Filters from "../Filters/Filters"

function Movies({
  movies,
  searchQuery,
  selectedGenre,
  onGenreChange,
  onMovieClick,
  favorites,
  onAddFavorite,
  onRemoveFavorite,
}) {
  return (
    <section className="movies" id="movies">
      <div className="movies-header">
        <div>
          <span className="section-label">
            {searchQuery ? "SEARCH RESULTS" : "EXPLORE"}
          </span>

          <h2>
            {searchQuery
              ? `Results for "${searchQuery}"`
              : "Popular Movies"}
          </h2>
        </div>

        <button
          className="view-all-button"
          onClick={() => {
            document
              .getElementById("movies")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }}
        >
          View All
        </button>
      </div>

      <Filters
        selectedGenre={selectedGenre}
        onGenreChange={onGenreChange}
      />

      {movies.length === 0 ? (
        <div className="empty-movies">
          <h3>No movies found</h3>

          <p>
            {searchQuery
              ? `We couldn't find any movies matching "${searchQuery}".`
              : "There are no movies available for this category."}
          </p>
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => {
            const isFavorite = favorites.some(
              (favorite) => favorite.id === movie.id
            )

            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={onMovieClick}
                onAddFavorite={onAddFavorite}
                onRemoveFavorite={onRemoveFavorite}
                isFavorite={isFavorite}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Movies