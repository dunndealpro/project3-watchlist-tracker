import './SelectedMovieDetails.css'

export default function SelectedMovieDetails({selectedDisplay, handleAddToMyMovies}){

    let selectedPosterUrl = `https://image.tmdb.org/t/p/original/${selectedDisplay.poster_path}`


    return(
        <div>
            Check if seen<input type="checkbox" />
            <br />
            <button onClick={() => handleAddToMyMovies(selectedDisplay.id)} type="submit">Add to MyMovies</button>
            <br />
            {selectedDisplay.title}
            <br />
            {selectedDisplay.release_date}
            <br />
            {selectedDisplay.overview}
            <br />
            <img className="selected-poster" src={selectedPosterUrl} alt="" />
        </div>
    )
}