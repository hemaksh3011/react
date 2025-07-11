import React from 'react'
import img from './containers.png'
import '../card.css'

const Card = () => {
  return (
    // const MoviesCard=({poster_path,title,overview,release_date})
    <div className='container' >
        <div className="card">
            <div className="card-image">
                <img src={img} alt="" />
            </div><hr />
            <div className="title">
                <h3>The coldest Sunset</h3>
            </div>
            <div className="details">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Omnis, totam facilis animi beatae iusto <br /> suscipit minima modi fugit cupiditate quas.
            </div>
            <br />
            <div className="tags">
                <button>#photography</button>
                <button>#travel</button>
                <button>#winter</button>
            </div>
        </div>
    </div>
  )
}

export default Card

