import * as moviesAPI from "../../utilities/movies-api"
import MovieListItem from "../MovieListItem/MovieListItem"
import MyMovieListItem from "../MyMovieListItem /MyMovieListItem"
import { useState, useEffect } from "react"

export default function AlreadyWatchedMovies({handleSelectMovie}) { // let nextWatchMovies =  getNonSeenMovies()
    // console.log("My watch list: ", nonSeenMovies)

    // const [nextWatchMovies, setNextWatchMovies] = useState([])
    const [alreadyWatchedMovies, setAlreadyWatchedMovies] = useState([])

    console.log('hey there already needs to be renamed to my movies')

    async function getAlreadyWatchedMovies(){
        console.log("ALREADY! pre moviesAPI", alreadyWatchedMovies)
       
        let alreadyWatchedTemp = await moviesAPI.getAlreadyWatchedMovies()
      
        setAlreadyWatchedMovies(alreadyWatchedTemp)
        //    console.log('next watch movies ', nextWatchMovies)  
    }


    

    useEffect(() => {
        getAlreadyWatchedMovies()
      }, []);
    
    // getnextWatchMovies()
    
    return(

        <div>
           Select a movie from your collection
            <br />
            {/* {nextWatchMovies[20].title} */}

            <div> 
                    <ul>
                        {alreadyWatchedMovies.map((movies) => ( 
                            
                            <MyMovieListItem 
                            key={movies.title} 
                            movie={movies} 
                            handleSelectMovie={handleSelectMovie}
                            />
                        ))}
                    </ul>
                </div>         
        </div>
    )
}