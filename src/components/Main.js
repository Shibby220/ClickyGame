import React, { Component } from 'react';
import Anime from "./Anime";
import animeArray from "../animeArray.json";
import "../styles/Main.css";

export default class Main extends Component {
  mixAnime = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  handleClick = (id) => {
    this.props.itScored(id);
    this.mixAnime(animeArray)
  }
  
  render() {
    return (
      <div className="main"> 
      <div className="container-fluid">
        <div className="jumbotron navbar-brand ">Click on the anime characters to marry them but don't marry the same character twice! Try to marry them all before it's too late! </div>
        <div className="container-fluid anime-box"> 
        {animeArray.map(image =>
            <Anime
              src = {image.src}
              alt = {image.name}
              id = {image.id}
              key = {image.id}
              handleClick= {this.handleClick}
              />)}
        </div>
      </div>
      </div>
    )
  }
}