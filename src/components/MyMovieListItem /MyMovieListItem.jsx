import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./MyMovieListItem.css"

export default function MovieListItem(props) {
    // const [posterUrl, setPosterUrl] = useState({})

    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    // console.log("huh? ")

    let movieTitle = props.movie.title
    let posterUrl =`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`
    // let posterUrl
    let evan 
    
    if (props.movie) {
        // console.log(movie)
        movieTitle = props.movie.title 
        // console.log(movie.poster_path)

        posterUrl = `https://image.tmdb.org/t/p/original/${props.movie.poster_path}`
        // console.log(posterUrl)
    } else { movieTitle = "False" }

   
    // async function getPosterUrl() {
    //     let selectedUrl = `https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=${API_KEY}&language=en-US`
    //     let posterUrlTemp = await fetch(selectedUrl).then(res => res.json())
    //     // setPosterUrl(posterUrlTemp)
    //     // console.log("PosterUrl: ", posterUrl.poster_path)
    //     evan = `https://image.tmdb.org/t/p/original/${posterUrl.poster_path}`
        
    //     // console.log("PosterUrl Evan: ", posterUrl)
    //     return(posterUrl)
    // }
    // useEffect(() => {    
    //    getPosterUrl();
    //  }, []);

    // console.log("PosterUrl Evan: ", evan)


    return (
        <div className="search-results-poster">
            <Link to="/movies"
                onClick={() => props.handleSelectMyMovie(props.movie.id)}> {props.movie.title}
                <br />

                <img src={evan} alt="" />


            </Link>
        </div>
    )
}