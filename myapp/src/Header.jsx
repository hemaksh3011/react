import './Header.css';

import React from "react";

import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <div className="nav1">
                <div className="mysite">MySite</div>
                <ul className="lists">
                    <li><Link to="/about">Go to About Page</Link></li>
                    <li><a href="/Genre">Genre</a></li>
                    <li><a href="/Contactus">Contact</a></li>
                    <li><a href="/About">About</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header