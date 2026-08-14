import { useState } from "react"
import { FaHeart, FaBars, FaTimes } from "react-icons/fa"

import "./Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a
          href="#top"
          className="navbar-logo"
          onClick={closeMenu}
        >
          CineVault
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`navbar-links ${
            menuOpen ? "mobile-open" : ""
          }`}
        >
          <a
            href="#movies"
            onClick={closeMenu}
          >
            Movies
          </a>

          <a
            href="#favorites"
            className="favorites-link"
            onClick={closeMenu}
          >
            <FaHeart />
            <span>Favorites</span>
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar