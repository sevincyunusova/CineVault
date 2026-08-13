import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Movies from "./components/Movies/Movies"
import {
  getPopularMovies,
  searchMovies,
  getMoviesByGenre,
} from "./services/tmdbApi"

function App() {
  const [movies, setMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setMovies(data)
      })
      .catch((error) => {
        console.error(error)
        setError("Failed to load movies.")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleSearch = async (query) => {
    try {
      setLoading(true)
      setError("")

      const results = await searchMovies(query)

      setMovies(results)
      setSearchQuery(query)
      setSelectedGenre("all")
    } catch (error) {
      console.error(error)
      setError("Failed to search movies.")
    } finally {
      setLoading(false)
    }
  }

  const handleGenreChange = async (genreId) => {
    try {
      setSelectedGenre(genreId)
      setLoading(true)
      setError("")

      if (genreId === "all") {
        const results = await getPopularMovies()

        setMovies(results)
        setSearchQuery("")

        return
      }

      const results = await getMoviesByGenre(genreId)

      setMovies(results)
      setSearchQuery("")
    } catch (error) {
      console.error(error)
      setError("Failed to load movies.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <Hero onSearch={handleSearch} />

      {loading && <p>Loading movies...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <Movies
          movies={movies}
          searchQuery={searchQuery}
          selectedGenre={selectedGenre}
          onGenreChange={handleGenreChange}
        />
      )}
    </>
  )
}

export default App