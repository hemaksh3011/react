import React, { useEffect, useState } from 'react';
import './TVShows.css';
import { fetchTrendingTvShows, searchTvShows } from './tmdb';
import MovieModal from './MovieModal';

function TvShows() {
  const [tvShows, setTvShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const load = async () => {
      const data = await fetchTrendingTvShows();
      setTvShows(data);
    };
    load();
  }, []);

  const handleSearch = async () => {
    if (query.trim() === "") return;
    const results = await searchTvShows(query);
    setTvShows(results);
  };

  return (
    <div className="tv-container">
      <h2>📺 Trending TV Shows</h2>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search TV Shows..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="tv-grid">
        {tvShows.map((tv) => (
          <div
            key={tv.id}
            className="tv-card"
            onClick={() => setSelectedShow(tv)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${tv.poster_path}`}
              alt={tv.name}
              className="tv-poster"
            />
            <h4>{tv.name}</h4>
          </div>
        ))}
      </div>

      {selectedShow && (
        <MovieModal movie={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  );
}

export default TvShows;
