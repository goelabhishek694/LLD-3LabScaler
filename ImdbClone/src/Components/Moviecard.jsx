import React from "react";

function MovieCard({ movieObject }) {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movieObject.poster_path})`,
      }}
    >
      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieObject.title}
      </div>
    </div>
  );
}

export default MovieCard;
