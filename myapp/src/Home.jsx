import React from 'react'
import './Home.css';


function Home() {
  return (
    <>
    <body className="body" >
    <div>Home</div>
    <nav className="navbar">
      <div className="logo">MySite</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    </body>
    
    </>
  )
}

export default Home