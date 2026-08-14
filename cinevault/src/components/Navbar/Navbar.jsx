import { FaHeart } from "react-icons/fa"

import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#top" className="navbar-logo">
          CineVault
        </a>

        <div className="navbar-links">
          <a href="#movies">
            Movies
          </a>

          <a
            href="#favorites"
            className="favorites-link"
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