import React from 'react'
import image from './containers.png'
import { Link } from 'react-router-dom';
import Card from './Card'
import Counter from './Counter'
import MovieList from './MovieList'

const Header = () => {
  return (
    <div>
        <div className="first">
          <img src="{image}" alt="" />
        </div>
        <div className="second">
          <Link to="/Card" >Card</Link>
          <Link to="/Counter" >Counter</Link>
          <Link to="/MovieList" >Counter</Link>
        </div>
        <div className="third">
          
        </div>
    </div>
  )
}

export default Header