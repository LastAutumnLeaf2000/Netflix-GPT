import React from "react";
import Header from "./Header";
import useNowPlayinngMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayinngMovies();

  return (
    <div>
      <div >
        <Header />
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
