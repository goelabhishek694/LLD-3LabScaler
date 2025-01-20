import moviesSlice from "./moviesSlice";
const actions = moviesSlice.actions;
const fetchMoviesMiddleware = (pageNo) => {
  return async (dispatch) => {
    try {
      dispatch(actions.setLoading());
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      };
      const resp = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pageNo}`,
        options
      );
      const movies = await resp.json();
      console.log(movies);
      dispatch(actions.setMovies(movies.results));
    } catch (err) {
      console.log(err);
      dispatch(actions.setError());
    }
  };
};

export default fetchMoviesMiddleware;
