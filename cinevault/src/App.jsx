import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Movies from "./components/Movies/Movies"
import { getPopularMovies } from "./services/tmdbApi"

function App() {
  const [movies, setMovies] = useState([])
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

  return (
    <>
      <Navbar />

      <Hero />

      {loading && (
        <p>Loading movies...</p>
      )}

      {error && (
        <p>{error}</p>
      )}

      {!loading && !error && (
        <Movies movies={movies} />
      )}
    </>
  )
}

export default App