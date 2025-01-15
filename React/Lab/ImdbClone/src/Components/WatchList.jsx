import React, { useEffect, useState } from "react";
import genreids from "../utility";
function WatchList() {
  const [watchList, setWatchList] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  useEffect(() => {
    // fetch the watchlist from the localStorage
    let stringifiedWatchlist = localStorage.getItem("watchList");
    if (!stringifiedWatchlist) return;
    let watchList = JSON.parse(stringifiedWatchlist);
    setWatchList(watchList);
  }, []);

  //compute the genreList once and then only when watchList state is changed.
  useEffect(() => {
    // 1. reduce -> {"action" : 1, "romance":3} -> obj.keys
    // 2. get all genres -> map -> u get distict genres
    const allGenres = watchList.map((movie) => genreids[movie.genre_ids[0]]);
    const allDistinctGenres = new Set(allGenres);
    // console.log(allDistinctGenres);
    setGenreList(["All Genres", ...allDistinctGenres]);
  }, [watchList]);

  const handleAscendingRatings = () => {
    let lthSortedRatings = watchList.sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setWatchList([...lthSortedRatings]);
    //do not alter the original source , i.e watchlist
  };

  const handleDescendingRatings = () => {
    let htlSortedRatings = watchList.sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setWatchList([...htlSortedRatings]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (genre) => {
    setCurrGenre(genre);
  }

  return (
    <>
      <div className="flex justify-center m-4">
        {genreList.map((genre, id) => {
          return (
            <button
              key={id}
              className={
                currGenre == genre
                  ? "h-[3rem] w-[9rem] bg-blue-400 flex justify-center items-center rounded-xl text-white font-bold mx-4"
                  : "h-[3rem] w-[9rem] bg-gray-400/50 flex justify-center items-center rounded-xl text-white font-bold mx-4"
              }
              onClick={() => handleClick(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Movies"
          onChange={handleSearch}
          value={search}
          className="bg-gray-200 border border-gray-500 outline-none px-4 h-[3rem] w-[18rem]"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <i
                    onClick={handleAscendingRatings}
                    class="fa-solid fa-arrow-up"
                  ></i>
                  <div>Ratings</div>
                  <i
                    onClick={handleDescendingRatings}
                    class="fa-solid fa-arrow-down"
                  ></i>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Delete</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {watchList
              .filter(movie => { 
                if(currGenre == "All Genres") return true
                return genreids[movie.genre_ids[0]] == currGenre })
              .filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movie) => (
                <tr className="hover:bg-gray-50" key={movie.id}>
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                    <img
                      className="h-[6rem] w-[10rem] object-fit"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt=""
                    />
                    <div className="font-medium text-gray-700 text-sm">
                      {movie.title}
                    </div>
                  </td>
                  <td className="pl-6 py-4">{movie.vote_average}</td>
                  <td className="pl-6 py-4">{movie.popularity}</td>
                  <td className="pl-2 py-4">{genreids[movie.genre_ids[0]]}</td>
                  <td onClick={()=>removeFromWatchList(movie)}className="text-red-500"><i class="fa-solid fa-trash"></i></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
