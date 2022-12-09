import './SelectedMovieDetails.css'

export default function SelectedMovieDetails(props) {

    let selectedPosterUrl = `https://image.tmdb.org/t/p/original/${props.selectedDisplay.poster_path}`

    return (
        <div className="selected-movie">
            <img className="selected-poster" src={selectedPosterUrl} alt="" />
            <div id="details">
                <span id="selected-title">{props.selectedDisplay.title}</span>
                <span id="released-date">{props.selectedDisplay.release_date}</span>
                <span id="overview">{props.selectedDisplay.overview}</span>
            </div>
            <button className="add-button" onClick={() => props.handleAddToMyMovies(props.selectedDisplay.id, props.selectedDisplay.title)} type="submit">Add to MyMovies</button>
        </div>
    )
}