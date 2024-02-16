import React from "react";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  //fetch trailer from Store
  const trailer = useSelector((store) => store.movies.trailer);
  // console.log(trailer)
  useTrailer(id);

  if (trailer == null) return;

  return (
    <div className="w-screen ">
      <iframe
        className="w-full aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key 
          // +"?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
      ></iframe>
    </div>
  );
};

export default VideoBackground;
