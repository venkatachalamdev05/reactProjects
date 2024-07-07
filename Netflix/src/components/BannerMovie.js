import axios from "axios";
import React, { useEffect, useState } from "react"
import movieTrailer from 'movie-trailer'

const BannerMovie = (props) => {
  const [randomMovie, setRandomMovie] = useState({});
  const [randomURL, setRandomURL] = useState("");
  const imageBaseURL = 'https://image.tmdb.org/t/p/original'
  const youtubeURL = 'https://www.youtube.com/embed/'
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=f3ce9e914791166e532920bf86abd869")
      .then(function (resultData) {
        let movies = [];
        movies = resultData.data.results;
        let randomMovie = movies[Math.floor(Math.random() * movies.length)]
        setRandomMovie(randomMovie);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);


  function getYouTubeURL() {
    movieTrailer(randomMovie.title)
      .then(function (data) {
        let id = new URLSearchParams(new URL(data).search).get("v");
        setRandomURL(id);
      })
      .catch(function (error) { })
  }

  return (
    <div>
      <div className="row">
        {randomURL && <iframe width="420" height="420" src={`${youtubeURL}${randomURL}`}></iframe>}
        <div className="col-md-3">
          {randomMovie && <div className="card bg-dark" style={{ "width": "24rem", "height": '660px', 'position': 'relative' }}>
            <div className="card-body" style={{ 'position': 'relative' }}>
              <h5 className="card-title text-light">{randomMovie.original_title}</h5>
              <p className="card-text">{randomMovie.overview}</p>
              {randomMovie.release_date && <p className="card-text"><b>Release Date :</b> {randomMovie.release_date}</p>}
              {randomMovie.original_language && <p className="card-text"><b>Movie Language :</b> {randomMovie.original_language}</p>}
              {randomMovie.release_date && randomMovie.original_language && <a href="#" className="btn btn-danger mb-4" style={{ 'position': 'absolute', bottom: 0, width: '90%' }} onClick={getYouTubeURL}>PLAY</a>}
            </div>
          </div>}
        </div>
        <div className="col-md-9">
          {randomMovie ? <img src={`${imageBaseURL}${randomMovie.backdrop_path}`} width={'100%'}  ></img> : null}
        </div>
      </div>

    </div>
  )
};

export default BannerMovie;



//      https://dhya.one:8443/hht/identity/users
