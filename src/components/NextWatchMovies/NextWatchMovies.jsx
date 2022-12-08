import * as moviesAPI from "../../utilities/movies-api"
import MovieListItem from "../MovieListItem/MovieListItem"
import { useState, useEffect } from "react"

export default function NextWatchMovies(){
    // let nextWatchMovies =  getNonSeenMovies()
    // console.log("My watch list: ", nonSeenMovies)

    const [nextWatchMovies, setNextWatchMovies] = useState([])
    // const [alreadyWatchedMovies, setAlreadyWatchedMovies] = useState([])

    // console.log('hey there')

    async function getNextWatchMovies(){
        // console.log("next watch pre moviesAPI")
        // console.log('nextseen movies ', nextWatchMovies)
        let nextWatchMoviesTemp = await moviesAPI.getNextWatchMovies()
        // let alreadyWatchedTemp = await moviesAPI.getAlreadyWatchedMovies()
        console.log("next watchstuff", nextWatchMoviesTemp)
        setNextWatchMovies(nextWatchMoviesTemp)
        // setAlreadyWatchedMovies(alreadyWatchedTemp)
           console.log('next watch movies ', nextWatchMovies)
        //    console.log('next watch movies ', nextWatchMovies)
    }
    // console.log(nextWatchMovies[20].title)

    useEffect(() => {
        getNextWatchMovies()
      }, []);
    
    // getnextWatchMovies()
    
    return(

        <div>
            My Watch List Goes Here!!
            <br />
            {/* {nextWatchMovies[20].title} */}

            <div> 
                    <ul>
                        {nextWatchMovies.map((movies) => ( 
                            <MovieListItem 
                            key={movies.title} 
                            movie={movies} 
                            // handleSelectMovie={handleSelectMovie}
                            />
                        ))}
                    </ul>
                </div>         
        </div>
    )
}