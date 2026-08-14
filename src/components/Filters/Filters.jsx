import "./Filters.css"

const genres = [
  { id: "all", name: "All" },
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Horror" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Sci-Fi" },
  { id: 53, name: "Thriller" },
]

function Filters({ selectedGenre, onGenreChange }) {
  return (
    <div className="filters">
      {genres.map((genre) => (
        <button
          key={genre.id}
          type="button"
          className={
            selectedGenre === genre.id
              ? "filter-button active"
              : "filter-button"
          }
          onClick={() => onGenreChange(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  )
}

export default Filters