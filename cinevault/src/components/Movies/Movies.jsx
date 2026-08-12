import "./Movies.css"

function Movies() {
  return (
    <section className="movies">
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
        <div className="movie-placeholder">
          <span>Movie</span>
        </div>

        <div className="movie-placeholder">
          <span>Movie</span>
        </div>

        <div className="movie-placeholder">
          <span>Movie</span>
        </div>

        <div className="movie-placeholder">
          <span>Movie</span>
        </div>

        <div className="movie-placeholder">
          <span>Movie</span>
        </div>
      </div>
    </section>
  )
}

export default Movies