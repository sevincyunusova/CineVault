import "./Movies.css"
import MovieCard from "../MovieCard/MovieCard"

function Movies({ movies }) {
  return (
    <section className="movies" id="movies">
      <div className="movies-header">
        <div>
          <span className="section-label">EXPLORE</span>
          <h2>Popular Movies</h2>
        </div>

        <button className="view-all-button">
          View All
        </button>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  )
}

export default Movies