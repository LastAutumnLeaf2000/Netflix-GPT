import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.NowPlayingMovies);
  if (!movies) return null;
  // console.log(movies);
  const { id } = movies[0];
  return (
    <div>
      {/*This lower div is to put a gradient on the video */}
      <div className="w-screen aspect-video absolute bg-gradient-to-tr from-black"></div>
      <VideoBackground id={id} />
      <div className="w-11/12 mx-auto">
        <VideoTitle mainMovie={movies[0]} />
      </div>
    </div>
  );
};

export default MainContainer;
