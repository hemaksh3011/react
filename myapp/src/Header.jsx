import './Header.css';
import React from "react";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <div className="nav1">
                <div className="mysite">MySite</div>
                <ul className="lists">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Genre">Genre</Link></li>
                    <li><Link to="/Contactus">Contactus</Link></li>
                    <li><Link to="/about">About</Link></li>
                   
                </ul>
                <div className='help' ><input type="text" placeholder='..help' /></div>
            </div>
        </>
    )
}

export default Header