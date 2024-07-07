import axios from "axios";
import React, { useEffect, useState } from "react"

const Movies = (props) => {
  const [movieList, setmovieList] = useState([]);
  const imageBaseURL = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    axios.get(props.url)
      .then(function (output) {
        setmovieList(output.data.results);
      })
      .catch(
        function (error) {
          console.log(error);
        }
      )

  }, []);

  return (
    <div>
      <h5>{props.moviesType}</h5>
      <div className="movie-section">
        {
          movieList.map(function (item, index) {
            return <img src={`${imageBaseURL}${item.poster_path}`} width={'220px'} className="movie-images" key={index}></img>
          })
        }
      </div>
    </div>
  )
};

export default Movies;
