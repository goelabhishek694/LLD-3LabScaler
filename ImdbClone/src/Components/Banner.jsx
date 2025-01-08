import React, { useState,useEffect } from "react";
function Banner() {
  const [bannerImage, setBannerImage] = useState(
    "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
  );
  const [title, setTitle] = useState("Placeholder title");

  // use the api : "https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1" to fetch the data and set the title and banner image of the first movie in the list.

  useEffect(() => {
    console.log("use effect fetched data");
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
        let firstMovie = res.results[0];
        setBannerImage(`https://image.tmdb.org/t/p/original/${firstMovie.backdrop_path}`)
        setTitle(firstMovie.title)
  })
      .catch(err => console.error(err));
  }, []);

  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">
        {title}
      </div>
    </div>
  );
}

export default Banner;