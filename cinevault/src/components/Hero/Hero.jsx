import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">WELCOME TO CINEVAULT</span>

        <h1>
          Discover Your Next
          <span> Favorite Movie</span>
        </h1>

        <p>
          Explore thousands of movies, discover new favorites,
          and find your next great watch.
        </p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search for a movie..."
          />

          <button>Search</button>
        </div>
      </div>
    </section>
  )
}

export default Hero