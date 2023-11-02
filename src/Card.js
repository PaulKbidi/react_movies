import React from 'react'
import {
  AiOutlineHeart,
} from "react-icons/ai";

function Card({ movie }) {
    var image = "";
    if (movie.backdrop_path == null){
        image = movie.poster_path;
    } else {
        image = movie.backdrop_path;
    }
  return (
    <div className="card">
      <img
        src={"https://image.tmdb.org/t/p/w300/" + image}
        alt={"Affiche du film" + movie.title}
      />
      <p>{movie.title}</p>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
      <p>{movie.overview}</p>
      <AiOutlineHeart size={"30px"} className="heartIconCard" />
    </div>
  );
}

export default Card