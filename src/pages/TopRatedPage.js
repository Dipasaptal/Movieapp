import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';


const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=7cdbef46bc3946eded722bfb6e90c22b
&language=en-US&page=${page}`
      )
      
      .then((response) => setMovies(response.data.results));
  }, [page]);

  return (
    <div className="bg-black min-h-screen w-full">
      <h2>Top Rated Movies</h2>
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default TopRatedPage;
