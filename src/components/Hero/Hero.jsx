import { useState } from "react"
import "./Hero.css"

function Hero({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const query = searchQuery.trim()

    if (!query) {
      return
    }

    onSearch(query)
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <span className="hero-label">
          WELCOME TO CINEVAULT
        </span>

        <h1>
          Discover Your Next
          <span> Favorite Movie</span>
        </h1>

        <p>
          Explore thousands of movies, discover new favorites,
          and find your next great watch.
        </p>

        <form
          className="hero-search"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(event.target.value)
            }
          />

          <button type="submit">
            Search
          </button>
        </form>

      </div>
    </section>
  )
}

export default Hero