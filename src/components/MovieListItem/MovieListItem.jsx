import { Link } from "react-router-dom"
import "./MovieListItem.css"

export default function MovieListItem({ movie, handleSelectMovie }) {
    // console.log("huh? ")

    let movieTitle
    let posterUrl =`https://image.tmdb.org/t/p/original/${movie.poster_path}`

    // const clickTest = e => {

    //     // console.log("Test ", movie.id)
    // }

    if (movie) {
        // console.log(movie)
        movieTitle = movie.title
        // console.log(movie.poster_path)

        posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
        // console.log(posterUrl)
    } else { movieTitle = "False" }

    return (
        <div className="search-results-poster">
            <Link to="/movies"
            onClick={() => handleSelectMovie(movie.id)}> {movie.title}
            <br />              
          
            <img src={posterUrl} alt="" />
            
           
                </Link>
        </div>

    )
}