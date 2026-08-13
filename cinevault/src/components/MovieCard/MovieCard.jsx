import "./MovieCard.css"

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.jpg"

  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A"

  return (
    <article className="movie-card">
      <div className="movie-poster">
        <img
          src={posterUrl}
          alt={movie.title}
        />

        <div className="movie-rating">
          ★ {movie.vote_average.toFixed(1)}
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>{releaseYear}</p>
      </div>
    </article>
  )
}

export default MovieCard