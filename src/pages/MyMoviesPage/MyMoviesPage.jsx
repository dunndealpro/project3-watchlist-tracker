import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import MyWatchList from "../../components/MyWatchList/MyWatchList";
import SelectedMyMovieDetails from "../../components/SelectedMyMovieDetails/SelectedMyMovieDetails";
import SelectedWatch from "../../components/SelectedWatch/SelectedWatch";
import AlreadyWatchedMovies from "../../components/AlreadyWatchedMovies/AlreadyWatchedMovies";
import NextWatchMovies from "../../components/NextWatchMovies/NextWatchMovies";
import "./MyMoviesPage.css"
import * as moviesAPI from "../../utilities/movies-api"

export default function MyMoviesPage() {

    const [selectedMovie, setSelectedMovie] = useState({})
    const [selectedDisplay, setSelectedDisplay] = useState({})

    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    const selectedUrl = `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${API_KEY}&language=en-US`


    // const [myMovies, setMyMovies] = useState([])
    // const [myNextWatch, setMyNextWatch] = useState([])
    // const [alreadyWatced, setAlreadyWatched] = ([])

    // console.log('hey there my movies')

    // async function getMyMovies() {
    //     console.log("getting MyMovies")
    //     // console.log('nonseen movies ', nonSeenMovies)
    //     let myMoviesTemp = await moviesAPI.getMyMovies()
    //     console.log("my movies stuff", myMoviesTemp)
    //     setMyMovies(myMoviesTemp)
    //     console.log('my movies movies ', myMovies)
    // }
    // console.log(nonSeenMovies[20].title)

    // useEffect(() => {
    //     getMyMovies()
    // }, []);

    const handleSelectMovie = async e => {
        const movieSelect = e
        setSelectedMovie(movieSelect)
        console.log("Test", e)
        console.log("Logging click event", e)
        console.log("Showing clicked movie: ", selectedMovie)

        try {
            const response = await fetch(selectedUrl);
            const data = await response.json();
            setSelectedDisplay(data);
            console.log(data)
            console.log(selectedDisplay.movieDbId)
        }catch(error){
            console.log("Error!!>!>!")
            console.error(error);
        }
    }


    async function handleDeleteFromMyMovies(movieId){
        console.log("delete from my movies ", movieId)
        const movie = await moviesAPI.deleteFromMyMovies(movieId)
        console.log(movie)
    }

    return (
        <div>
            <h1>MyMovies Page</h1>
            <div className="my-movies-main">
                <NextWatchMovies />
                {/* <SelectedMovieDetails selectedDisplay={selectedDisplay} handleAddToMyMovies={handleAddToMyMovies}/> */}
                <SelectedMyMovieDetails 
                selectedDisplay={selectedDisplay} 
                handleDeleteFromMyMovies={handleDeleteFromMyMovies
                } />
                {/* <SelectedWatch /> */}
                <AlreadyWatchedMovies 
                handleSelectMovie={handleSelectMovie}/>

            </div>

        </div>
    )

    // return (
    //     <div>
    //         <h1>My Movies Page</h1>
    //         <div> 
    //                 <ul>
    //                     {myMovies.map((movies) => ( 
    //                         <MovieListItem 
    //                         key={movies.title} 
    //                         movie={movies} 
    //                         // handleSelectMovie={handleSelectMovie}
    //                         />
    //                     ))}
    //                 </ul>
    //             </div>         
    //     </div>
    // )
}