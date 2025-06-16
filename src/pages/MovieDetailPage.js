import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=7cdbef46bc3946eded722bfb6e90c22b
&language=en-US`
      )
      .then((response) => setMovie(response.data));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container my-4 ">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetailPage;
