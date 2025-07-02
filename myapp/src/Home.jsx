import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <>
    <body className="body" >
    <div>Home</div>
    <nav className="navbar">
      <div className="logo">MySite</div>
      <ul className="nav-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/genre">Projects</a></li>
        <li><a href="/contactus">Contact</a></li>
      </ul>
    </nav>
    </body>
    
    </>
  )
}

export default Home