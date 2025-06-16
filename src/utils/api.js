import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchMovies = async (endpoint, page = 1) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};