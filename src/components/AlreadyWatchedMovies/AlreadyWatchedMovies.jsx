import * as moviesAPI from "../../utilities/movies-api"
import MovieListItem from "../MovieListItem/MovieListItem"
import MyMovieListItem from "../MyMovieListItem /MyMovieListItem"
import { useState, useEffect } from "react"

export default function AlreadyWatchedMovies(props) { // let nextWatchMovies =  getNonSeenMovies()
    // console.log("My watch list: ", nonSeenMovies)

    // const [nextWatchMovies, setNextWatchMovies] = useState([])
    // const [alreadyWatchedMovies, setAlreadyWatchedMovies] = useState([])

    console.log('hey there already needs to be renamed to my movies')

    // async function getAlreadyWatchedMovies(){
    //     console.log("ALREADY! pre moviesAPI", props.alreadyWatchedMovies)
       
    //     let alreadyWatchedTemp = await moviesAPI.getAlreadyWatchedMovies()
      
    //     props.setAlreadyWatchedMovies(alreadyWatchedTemp)
    //     //    console.log('next watch movies ', nextWatchMovies)  
    // }


    

    // useEffect(() => {
    //     getAlreadyWatchedMovies()
    //   }, []);
    
    // getnextWatchMovies()
    
    return(

        <div>
           Select a movie from your collection
            <br />
            {/* {nextWatchMovies[20].title} */}

            <div> 
                    <ul>
                        {props.alreadyWatchedMovies.map((movies) => ( 
                            
                            <MyMovieListItem 
                            key={movies.title} 
                            movie={movies} 
                            handleSelectMyMovie={props.handleSelectMyMovie}
                            />
                        ))}
                    </ul>
                </div>         
        </div>
    )
}