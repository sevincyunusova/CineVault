import { useEffect } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Movies from "./components/Movies/Movies"
import { getPopularMovies } from "./services/tmdbApi"

function App() {
  useEffect(() => {
    getPopularMovies()
      .then((movies) => {
        console.log(movies)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Movies />
    </>
  )
}

export default App