import { Link } from "react-router-dom"
import "./MovieListItem.css"

export default function MovieListItem(props) {
    
    let movieTitle
    let posterUrl = `https://image.tmdb.org/t/p/original/${props.movie.poster_path}`

    if (props.movie) {
        movieTitle = props.movie.title
        posterUrl = `https://image.tmdb.org/t/p/original/${props.movie.poster_path}`
    } else { movieTitle = "False" }

    return (
        <div className="search-results-poster">
            <button className="select-button"
                onClick={() => props.handleSelectMovie(props.movie.id)}>
                {props.movie.title}
                <br />
                <img src={posterUrl} alt="" />
            </button>
        </div>
    )
}

