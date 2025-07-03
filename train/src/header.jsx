import React from "react";
import './Header.css';
// import { Link } from 'react-router-dom';


function Header() {
    return (
        <>

            <div>home</div>
            <nav className="navbar">
                <div className="logo">MySite</div>
                <ul className="nav-links">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Genre">Genre</a></li>
                    <li><a href="/contactus">Contact</a></li>
                    <li><a href="/About">About</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header