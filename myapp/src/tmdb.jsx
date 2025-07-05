// tmdb.js

const API_KEY = "09d4a583c206cebdd85ad57b36cb5a9d";
const BASE_URL = "https://api.themoviedb.org/3";

// Trending Movies
export async function fetchTrendingMovies() {
  try {
    const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}

// Trending TV Shows
export async function fetchTrendingTvShows() {
  try {
    const res = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching TV shows:", error);
    return [];
  }
}

// // Search Movies
// export async function searchMovies(query) {
//   try {
//     const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
//     const data = await res.json();
//     return data.results;
//   } catch (error) {
//     console.error("Error searching movies:", error);
//     return [];
//   }
// }

// Search TV Shows
export async function searchTvShows(query) {
  try {
    const res = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error searching TV shows:", error);
    return [];
  }
}
//upcoming
export async function fetchUpcomingMovies() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&region=IN`);
      const data = await res.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      return [];
    }
  }
  

  //genre 
  export async function fetchMoviesByGenre(genreId) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=09d4a583c206cebdd85ad57b36cb5a9d&with_genres=${genreId}`
    );
    const data = await res.json();
    return data.results;
  }
  export async function fetchMovieGenres() {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();
    return data.genres;
  }
  