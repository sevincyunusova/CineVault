import "./Movies.css"
import MovieCard from "../MovieCard/MovieCard"
import Filters from "../Filters/Filters"

function Movies({
  movies,
  searchQuery,
  selectedGenre,
  onGenreChange,
  onMovieClick,
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
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={onMovieClick}
          />
        ))}
      </div>
    </section>
  )
}

export default Movies