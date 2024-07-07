import React from "react"
import Movies from "./Movies";
import BannerMovie from "./BannerMovie";
const MoviesList = [
  {
    info: "Trending Movies",
    movieUrl: "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=f3ce9e914791166e532920bf86abd869"
  },
  {
    info: "Horror Movies",
    movieUrl: "https://api.themoviedb.org/3/discover/movie?api_key=f3ce9e914791166e532920bf86abd869&with_genres=27"
  },
  {
    info: "Science Fiction",
    movieUrl: "https://api.themoviedb.org/3/discover/movie?api_key=f3ce9e914791166e532920bf86abd869&with_genres=878"
  },
  {
    info: "Adventure",
    movieUrl: "https://api.themoviedb.org/3/discover/movie?api_key=f3ce9e914791166e532920bf86abd869&with_genres=12"
  },
];

const MoviesWrapper = (props) => {
  return (
    <div>
      <div className="container-fluid">
        {<BannerMovie url={MoviesList[0].movieUrl} moviesType={MoviesList[0].info}></BannerMovie>}
      </div>
      <div className="mt-3">
        {
          MoviesList.map(function (item, index) {
            return <Movies url={item.movieUrl} moviesType={item.info} key={index}></Movies>
          })
        }
      </div>
    </div>
  )
};

export default MoviesWrapper;
