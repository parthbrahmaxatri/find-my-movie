import React from "react";

function MovieCard(props) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
        alt={props.movie.title + " poster"}
      />
      
      <div className="card--content">
        <h1 className="card-title">{props.movie.title}</h1>
        <p>RELEASE DATE: {props.movie.release_date}</p>
        <p>RATING: {props.movie.vote_average}</p>
        <p className="card--desc">{props.movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;