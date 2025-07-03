import React from 'react'
import './Genre.css';
import { Link } from 'react-router-dom';


function Genre() {
  return (
    <>
    <body className="body" >
    <div>Genre</div>
    <nav className="navbar">
      <div className="logo">MySite</div>
      <ul className="nav-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="/Genre">Genre</a></li>
        <li><a href="/contactus">Contact</a></li>
        <li><a href="/About">About</a></li>
      </ul>
    </nav>
    </body>
    </>
  )
}

export default Genre