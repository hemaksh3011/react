import React, { useEffect, useState } from 'react';
import './Genre.css';
import { fetchMovieGenres, fetchMoviesByGenre } from './tmdb';
import MovieModal from './MovieModal';

function Genre() {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [searchTerms, setSearchTerms] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadGenresAndMovies = async () => {
      const fetchedGenres = await fetchMovieGenres();
      setGenres(fetchedGenres);
      const genreData = {};
      for (const genre of fetchedGenres) {
        const movies = await fetchMoviesByGenre(genre.id);
        genreData[genre.name] = movies;
      }
      setMoviesByGenre(genreData);
    };
    loadGenresAndMovies();
  }, []);

  const handleSearch = (genreName, movies) => {
    const term = searchTerms[genreName]?.toLowerCase() || "";
    return movies.filter((movie) =>
      movie.title?.toLowerCase().includes(term)
    );
  };

  const handleSearchChange = (genreName, value) => {
    setSearchTerms((prev) => ({
      ...prev,
      [genreName]: value,
    }));
  };

  return (
    <div className="genre-container">
      <h2>🎭 Movies By Genre</h2>

      {genres.map((genre) => (
        <div key={genre.id} className="genre-section">
          <div className="genre-heading">
            <h3>{genre.name}</h3>
            <input
              type="text"
              placeholder={`Search in ${genre.name}`}
              value={searchTerms[genre.name] || ''}
              onChange={(e) => handleSearchChange(genre.name, e.target.value)}
              className="genre-input"
            />
          </div>

          <div className="genre-grid">
            {moviesByGenre[genre.name] &&
              handleSearch(genre.name, moviesByGenre[genre.name]).map((movie) => (
                <div
                  key={movie.id}
                  className="genre-card"
                  onClick={() => setSelectedMovie(movie)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <h4>{movie.title}</h4>
                </div>
              ))}
          </div>
        </div>
      ))}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default Genre;