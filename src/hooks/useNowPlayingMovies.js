import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import {API_options} from "../utils/constants"


const useNowPlayinngMovies = ()=>{
  //Fetches data from TMDB API and updates the Store
  const dispatch = useDispatch()

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  };
}
export default useNowPlayinngMovies