import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';


function Footer() {
  return (
    <>
        <div className="middle">
            <ul className='links' >
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Genre">Genre</Link></li>
                <li><Link to="/Contactus">Contactus</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Footer