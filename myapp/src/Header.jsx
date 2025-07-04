import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './images/header_logo.png'; // make sure logo exists

function Header() {
  return (
    <header className="main-header">
      <div className="logo-area">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <h1 className="site-title">Cine<span>Score</span></h1>
      </div>

      <nav className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/tvshows" className="nav-item">TV Shows</Link>
        <Link to="/movies" className="nav-item">Movies</Link>
        <Link to="/upcoming" className="nav-item">Upcoming</Link>
        <Link to="/genres" className="nav-item">Genres</Link>
        <Link to="/search" className="nav-item">Search</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search movies, actors..." />
        <button className="search-btn">🔍</button>
      </div>
    </header>
  );
}

export default Header;
