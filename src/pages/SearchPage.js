import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const SearchPage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=7cdbef46bc3946eded722bfb6e90c22b
&language=en-US&query=${query}&page=${page}`
        )
        .then((response) => setMovies(response.data.results));
    }
  }, [query, page]);

  return (
    <div className="container">
      <h2>Search Results for: {query}</h2>
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No results found.</p>
        )}
      </div>
      {movies.length > 0 && <Pagination page={page} setPage={setPage} />}
    </div>
  );
};

export default SearchPage;
