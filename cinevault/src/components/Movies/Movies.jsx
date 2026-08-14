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

        <button className="view-all-button">
          View All
        </button>
      </div>

      <Filters
        selectedGenre={selectedGenre}
        onGenreChange={onGenreChange}
      />

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
              isFavorite={isFavorite}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Movies