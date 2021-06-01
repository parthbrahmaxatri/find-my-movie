import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import SearchMovies from "./searchMovies";

ReactDOM.render(
  <div className="container">
    <h1 className="title">findMyMovie🔎</h1>
    <SearchMovies></SearchMovies>
  </div>, document.getElementById("root")
)