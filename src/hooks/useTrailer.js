import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_options } from "../utils/constants";

const useTrailer = (id) => {
  const dipatch = useDispatch()

//fetch trailer and update the store with trailer video
  useEffect(() => {
    getTrailer();
  }, []);

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_options
    );
    const json = await data.json();
    // console.log(json);

    //".find" filters out only the first trailer
    const trailer = json?.results?.find((list) => list.type == "Trailer");
    trailer
      ? dipatch(addTrailer(trailer))
      : dipatch(addTrailer(json?.results[0]));
    console.log(trailer);
    // settrailer
  };
};

export default useTrailer;
