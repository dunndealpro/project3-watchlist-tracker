import { Link } from "react-router-dom"
import "./MovieListItem.css"

export default function MovieListItem(props) {
    // console.log("huh? ")

    let movieTitle
    let posterUrl =`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`

    // const clickTest = e => {

    //     // console.log("Test ", movie.id)
    // }

    if (props.movie) {
        // console.log(movie)
        movieTitle = props.movie.title 
        // console.log(movie.poster_path)

        posterUrl = `https://image.tmdb.org/t/p/original/${props.movie.poster_path}`
        // console.log(posterUrl)
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

// export default function MovieListItem({ handleSelectMovie, movie }) {
//     // console.log("huh? ")

//     let movieTitle
//     let posterUrl =`https://image.tmdb.org/t/p/original/${movie.poster_path}`

//     // const clickTest = e => {

//     //     // console.log("Test ", movie.id)
//     // }

//     if (movie) {
//         // console.log(movie)
//         movieTitle = movie.title 
//         // console.log(movie.poster_path)

//         posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
//         // console.log(posterUrl)
//     } else { movieTitle = "False" }

//     return (
//         <div className="search-results-poster">
//             <button
//             onClick={() => handleSelectMovie(movie.id)}> {movie.title}
//             <br />              
          
//             <img src={posterUrl} alt="" />
            
           
//                 </button>
//         </div>
//     )
// }