import React, { useEffect, useState } from 'react';
import './MovieModal.css';

const API_KEY = "09d4a583c206cebdd85ad57b36cb5a9d";

function MovieModal({ movie, onClose }) {
  const [cast, setCast] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchCastAndTrailer = async () => {
      try {
        const mediaType = movie.first_air_date ? 'tv' : 'movie';

        const castRes = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${movie.id}/credits?api_key=${API_KEY}`
        );
        const castData = await castRes.json();
        setCast(castData.cast.slice(0, 5));

        const videoRes = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${movie.id}/videos?api_key=${API_KEY}`
        );
        const videoData = await videoRes.json();
        const trailer = videoData.results.find(
          (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
        );
        if (trailer) setTrailerKey(trailer.key);
      } catch (err) {
        console.error("Error fetching details:", err);
      }
    };

    fetchCastAndTrailer();
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>×</span>
        <div className="modal-body">
          <div className="modal-layout">
            <div className="modal-left">
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="poster-img"
              />
            </div>

            <div className="modal-right">
              <h2>{movie.title || movie.name}</h2>
              <p><strong>Release Date:</strong> {movie.release_date || movie.first_air_date}</p>
              <p><strong>Rating:</strong> {movie.vote_average} ⭐</p>
              <p><strong>Overview:</strong> {movie.overview}</p>

              <div className="cast-list">
                <strong>Top Cast:</strong>
                <ul>
                  {cast.map((actor) => (
                    <li key={actor.id}>{actor.name}</li>
                  ))}
                </ul>
              </div>

              {trailerKey && (
                <div className="trailer-section">
                  <h3>🎮 Trailer</h3>
                  <iframe
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="YouTube trailer"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
