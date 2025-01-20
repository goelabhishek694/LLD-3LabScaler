import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    movies: [],
    error:false,
    loading:true,
  },
  //function that helps us to alter the state
  reducers: {
    setMovies: (state, action) => {
        state.loading = false;
        console.log(action);
        state.movies = action.payload;
    },
    setError: (state) => {
        state.loading = false;
    },
    setLoading: (state) => {
        state.error = false;
        state.loading=true;
    }
  },
});

export default moviesSlice
