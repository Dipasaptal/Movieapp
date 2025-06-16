import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7cdbef46bc3946eded722bfb6e90c22b&language=en-US&page=${page}`
      )
 
      .then((response) => setMovies(response.data.results))
      .catch((error) => {
        console.error("Error fetching data:", error.response ? error.response.data : error.message);
      });
  }, [page]);

  return (
    <div className="bg-black min-h-screen w-full">
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
