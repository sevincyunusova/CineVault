import { FaSearch, FaHeart } from "react-icons/fa"

import "./Navbar.css"

function Navbar({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#top" className="navbar-logo">
          CineVault
        </a>

        <div className="navbar-search">
          <FaSearch />

          <input
            type="text"
            placeholder="Search movies..."
            onChange={handleSearch}
          />
        </div>

        <div className="navbar-links">
          <a href="#movies">Movies</a>

          <a
            href="#favorites"
            className="favorites-link"
          >
            <FaHeart />
            Favorites
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar