import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./MyMovieListItem.css"

export default function MovieListItem({ movie, handleSelectMovie }) {
    const [posterUrl, setPosterUrl] = useState({})

    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    // console.log("huh? ")

    let movieTitle = movie.title
    // let posterUrl =`https://image.tmdb.org/t/p/original/${movie.poster_path}`
    // let posterUrl
    let evan 
    
    if (movie) {        
        movieTitle = movie.title
        // console.log("If   ", movie._id)
        // getPosterUrl()
        // posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    } else {
        console.log("FALSE")
        movieTitle = "False"
    }

    async function getPosterUrl() {
        let selectedUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=en-US`
        let posterUrlTemp = await fetch(selectedUrl).then(res => res.json())
        setPosterUrl(posterUrlTemp)
        // console.log("PosterUrl: ", posterUrl.poster_path)
        evan = `https://image.tmdb.org/t/p/original/${posterUrl.poster_path}`
        
        // console.log("PosterUrl Evan: ", posterUrl)
        return(posterUrl)
    }
    // useEffect(() => {    
    //    getPosterUrl();
    //  }, []);

    // console.log("PosterUrl Evan: ", evan)


    return (
        <div className="search-results-poster">
            <Link to="/movies"
                onClick={() => handleSelectMovie(movie.id)}> {movie.title}
                <br />

                <img src={evan} alt="" />


            </Link>
        </div>
    )
}