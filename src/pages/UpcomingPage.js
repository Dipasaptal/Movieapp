import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMovies('upcoming', page)
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching upcoming movies:", error));
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

export default UpcomingPage;
