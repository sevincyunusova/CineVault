const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  )

  if (!response.ok) {
    throw new Error(`Popular movies error: ${response.status}`)
  }

  const data = await response.json()

  console.log("Popular movies API response:", data)

  return data
}

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`
  )

  if (!response.ok) {
    throw new Error(`Search movies error: ${response.status}`)
  }

  const data = await response.json()

  console.log("Search API response:", data)

  return data
}

export const getMoviesByGenre = async (genreId) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=en-US&sort_by=popularity.desc`
  )

  if (!response.ok) {
    throw new Error(`Genre movies error: ${response.status}`)
  }

  const data = await response.json()

  console.log("Genre API response:", data)

  return data
}