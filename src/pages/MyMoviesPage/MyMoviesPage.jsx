import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import MyWatchList from "../../components/MyWatchList/MyWatchList";
import SelectedMovieDetails from "../../components/SelecetedMovieDetails/SelectedMovieDetails";
import SelectedWatch from "../../components/SelectedWatch/SelectedWatch";
import AlreadyWatchedMovies from "../../components/AlreadyWatchedMovies/AlreadyWatchedMovies";
import NextWatchMovies from "../../components/NextWatchMovies/NextWatchMovies";
import "./MyMoviesPage.css"
import * as moviesAPI from "../../utilities/movies-api"

export default function MyMoviesPage() {

    const [myMovies, setMyMovies] = useState([])

    console.log('hey there my movies')

    async function getMyMovies(){
        console.log("getting MyMovies")
        // console.log('nonseen movies ', nonSeenMovies)
        let myMoviesTemp = await moviesAPI.getMyMovies()
        console.log("my movies stuff", myMoviesTemp)
        setMyMovies(myMoviesTemp)
           console.log('my movies movies ', myMovies)
    }
    // console.log(nonSeenMovies[20].title)

    useEffect(() => {
        getMyMovies()
      }, []);

      return (
        <div>
            <h1>MyMovies Page</h1>
<div className="my-movies-main">
            <NextWatchMovies/>
            {/* <SelectedMovieDetails selectedDisplay={selectedDisplay} handleAddToMyMovies={handleAddToMyMovies}/> */}
<SelectedWatch/>           
            <AlreadyWatchedMovies/>

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