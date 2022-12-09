import './SelectedMyMovieDetails.css'
import { useState } from 'react'


export default function SelectedMyMovieDetails(props) {

    // const [check, setCheck]= useState(false)

    let selectedPosterUrl = `https://image.tmdb.org/t/p/original/${props.selectedDisplay.poster_path}`


    console.log(props)
    return (
        <div className="selected-my-movie">
            <img className="selected-my-poster" src={selectedPosterUrl} alt="" />

            <div id="my-movie-details">
            <span id="selected-my-title">{props.selectedDisplay.title}</span>

            <span id="my-released-date"> {props.selectedDisplay.release_date}</span>

            <span id="my-overview">{props.selectedDisplay.overview}</span>

            </div>
            
            <br />
            <button className="my-delete-button" onClick={() => props.handleDeleteFromMyMovies(props.selectedDisplay.id)} type="submit">Delete from MyMovies!</button>
        </div>




    )
}