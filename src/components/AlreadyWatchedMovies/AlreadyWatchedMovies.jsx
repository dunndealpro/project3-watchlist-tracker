import * as moviesAPI from "../../utilities/movies-api"
import MovieListItem from "../MovieListItem/MovieListItem"
import MyMovieListItem from "../MyMovieListItem /MyMovieListItem"
import { useState, useEffect } from "react"
import "./AlreadyWatchedMovies.css"

export default function AlreadyWatchedMovies(props) {

    return (

        <div>
            Select a movie from your collection
            <div className="my-movies-container">
                <ul className = "my-movies">
                    {props.alreadyWatchedMovies.map((movies) => (

                        <MyMovieListItem
                            key={movies.title}
                            movie={movies}
                            handleSelectMyMovie={props.handleSelectMyMovie}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}