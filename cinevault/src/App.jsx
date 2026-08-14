import { useEffect, useState } from "react"

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Movies from "./components/Movies/Movies"
import Favorites from "./components/Favorites/Favorites"
import MovieModal from "./components/UI/MovieModal/MovieModal"

import {
  getPopularMovies,
  searchMovies,
  getMoviesByGenre,
} from "./services/tmdbApi"

function App() {
  const [movies, setMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedMovie, setSelectedMovie] = useState(null)

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("cinevault-favorites")

    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    localStorage.setItem(
      "cinevault-favorites",
      JSON.stringify(favorites)
    )
  }, [favorites])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        setError("")

        const data = await getPopularMovies()

        setMovies(data.results || [])
      } catch (error) {
        console.error(error)
        setError("Failed to load movies.")
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  const handleSearch = async (query) => {
    setSearchQuery(query)

    if (!query.trim()) {
      try {
        setLoading(true)
        setError("")

        const data = await getPopularMovies()

        setMovies(data.results || [])
      } catch (error) {
        console.error(error)
        setError("Failed to load movies.")
      } finally {
        setLoading(false)
      }

      return
    }

    try {
      setLoading(true)
      setError("")

      const data = await searchMovies(query)

      setMovies(data.results || [])
    } catch (error) {
      console.error(error)
      setError("Failed to search movies.")
    } finally {
      setLoading(false)
    }
  }

  const handleGenreChange = async (genreId) => {
    setSelectedGenre(genreId)

    try {
      setLoading(true)
      setError("")

      if (genreId === "all") {
        const data = await getPopularMovies()

        setMovies(data.results || [])
      } else {
        const data = await getMoviesByGenre(genreId)

        setMovies(data.results || [])
      }
    } catch (error) {
      console.error(error)
      setError("Failed to load movies.")
    } finally {
      setLoading(false)
    }
  }

  const handleAddFavorite = (movie) => {
    setFavorites((currentFavorites) => {
      const alreadyExists = currentFavorites.some(
        (favorite) => favorite.id === movie.id
      )

      if (alreadyExists) {
        return currentFavorites
      }

      return [...currentFavorites, movie]
    })
  }

  const handleRemoveFavorite = (movieId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter(
        (movie) => movie.id !== movieId
      )
    )
  }

  return (
    <>
      <Navbar />

      <Hero onSearch={handleSearch} />

      {loading && (
        <p className="loading-message">
          Loading movies...
        </p>
      )}

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {!loading && !error && (
        <Movies
          movies={movies}
          searchQuery={searchQuery}
          selectedGenre={selectedGenre}
          onGenreChange={handleGenreChange}
          onMovieClick={setSelectedMovie}
        />
      )}

      <Favorites
        favorites={favorites}
        onMovieClick={setSelectedMovie}
        onRemoveFavorite={handleRemoveFavorite}
      />

      <MovieModal
        movie={selectedMovie}
        favorites={favorites}
        onClose={() => setSelectedMovie(null)}
        onAddFavorite={handleAddFavorite}
        onRemoveFavorite={handleRemoveFavorite}
      />
    </>
  )
}

export default App