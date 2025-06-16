import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (endpoint) => {
    const response = await axios.get(endpoint);
    return response.data.results;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      });
  },
});

export default moviesSlice.reducer;
