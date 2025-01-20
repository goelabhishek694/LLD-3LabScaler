import React, { useEffect, useState } from "react";
import MovieCard from "./Moviecard";
import { useSelector, useDispatch } from "react-redux";
import paginationSlice from "../redux/paginationSlice";
const paginationActions = paginationSlice.actions;
import fetchMoviesMiddleware from "../redux/moviesMiddleware";
function Movies() {
  // setup basic pagination
  const {pageNo} = useSelector((state)=>{return state.paginationState})
  const {movies} = useSelector((state) => {return state.moviesState})
  const [watchList,setWatchList] = useState([]);
  const dispatch = useDispatch();
  // go next handler
  const handleNext = () => {
    dispatch(paginationActions.handleNext())
  };
  // go back handler
  const handlePrevious = () => {
    dispatch(paginationActions.handlePrevious())
  };

  useEffect(() => {
    dispatch(fetchMoviesMiddleware(pageNo))
  },[pageNo])


  const addToWatchList = (movieObj) => {
    console.log("adding movie to watchlist", movieObj);
    let updatedWatchList = [ ...watchList, movieObj];
    localStorage.setItem("watchList",JSON.stringify(updatedWatchList));
    setWatchList(updatedWatchList);

  }

  const removeFromWatchList = (movieId) => {
    console.log("removing from watchlist", movieId);
    let updatedWatchList = watchList.filter(movieObj=>movieObj.id!=movieId);
    localStorage.setItem("watchList",JSON.stringify(updatedWatchList));
    setWatchList(updatedWatchList);
  }

  useEffect(() => {
    let stringifiedWatchlist = localStorage.getItem("watchList") ;
    if(!stringifiedWatchlist) return;
    let watchList = JSON.parse(stringifiedWatchlist);
    setWatchList(watchList);
  },[])

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>

      {/* Show movies here */}
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj, idx) => {
          return (
            <MovieCard key={idx} movieObject={movieObj} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} watchList={watchList}></MovieCard>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2">
        <div className="px-8" onClick={handlePrevious}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div>{pageNo}</div>
        <div className="px-8" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Movies;
