import React from "react";

const VideoTitle = ({ mainMovie }) => {
  const {
    original_title,
    overview,
    backdrop_path,
    poster_path,
    title,
    vote_average,
  } = mainMovie;
  console.log(mainMovie);
  return (
    <div className="absolute w-[30%] top-[40%] text-white contrast-200">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="w-3/4 my-6">{overview}</p>
      <div>
        <button className="mr-4 px-12 py-3 rounded-md font-semibold text-xl hover:opacity-80 bg-white text-black ">
          <i className="fa-solid fa-play"></i> Play
        </button>
        <button className="px-10 py-3 font-semibold rounded-md text-xl bg-black hover:opacity-80">
          <i className="fa-solid fa-circle-info"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
