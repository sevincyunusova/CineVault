import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>CineVault</h2>

          <p>
            Discover movies, explore new favorites,
            and build your personal collection.
          </p>
        </div>

        <div className="footer-tmdb">
          <p>
            This product uses the TMDB API but is not
            endorsed or certified by TMDB.
          </p>

          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
          >
            The Movie Database (TMDB)
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 CineVault. Built for educational purposes.
        </p>
      </div>
    </footer>
  )
}

export default Footer