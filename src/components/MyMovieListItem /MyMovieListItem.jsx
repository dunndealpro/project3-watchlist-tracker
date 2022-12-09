import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./MyMovieListItem.css"

export default function MovieListItem(props) {
       const API_KEY = "a72c1d466153d06b65f2879b369031d8"

    let movieTitle = props.movie.title
    let posterUrl =`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`
    
    let poster 
    
    if (props.movie) {
        movieTitle = props.movie.title 
        posterUrl = `https://image.tmdb.org/t/p/original/${props.movie.poster_path}`
    } else { movieTitle = "False" }

    return (
        <div className="my-movies-poster">
            <Link id="link-my-movies" to="/movies"
                onClick={() => props.handleSelectMyMovie(props.movie.id)}> {props.movie.title}
                <br />
                <img src={poster} alt="" />
            </Link>
        </div>
    )
}