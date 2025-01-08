import React, { useEffect, useState } from "react";
function Movies() {
  // setup basic pagination
  const [pageNo, setPageNo] = useState(1);

  // go next handler
  const handleNext = () => {
    setPageNo(pageNo+1)
  };
  // go back handler
  const handlePrevious = () => {
    if(pageNo == 1) return;
    setPageNo(pageNo-1)
  };

  // we will be using this static list of movies then we will replace it with actual  data fetching logic
  const [movies, setMovies] = useState([
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 1",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 2",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 3",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 4",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 5",
    },
  ]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
      }
    };
    
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(res => res.json())
      .then(res => {
        setMovies(res.results)
        console.log(res)
  })
      .catch(err => console.error(err));
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
            <div
              key={idx}
              className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between item-end"
              style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movieObj.backdrop_path
              })` }}
            >
              <div className="text-white w-full text-center text-xl bg-gray-900/70 p-2 rounded-lg">{movieObj.title}</div>
            </div>
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
