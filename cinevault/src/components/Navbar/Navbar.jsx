import { FaHeart, FaUser } from "react-icons/fa"
import "./Navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          Cine<span>Vault</span>
        </a>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#favorites">Favorites</a>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-icon-button"
            aria-label="Favorites"
          >
            <FaHeart />
          </button>

          <button
            type="button"
            className="navbar-icon-button"
            aria-label="Profile"
          >
            <FaUser />
          </button>
        </div>

      </div>
    </header>
  )
}

export default Navbar