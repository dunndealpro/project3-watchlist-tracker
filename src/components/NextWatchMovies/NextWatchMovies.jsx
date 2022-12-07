import * as moviesAPI from "../../utilities/movies-api"
import MovieListItem from "../MovieListItem/MovieListItem"
import { useState, useEffect } from "react"

export default function NextWatchMovies(){
    // let nextWatchMovies =  getNonSeenMovies()
    // console.log("My watch list: ", nonSeenMovies)

    const [nextWatchMovies, setNextWatchMovies] = useState([])

    console.log('hey there')

    async function getNextWatchMovies(){
        console.log("next seen testing pre moviesAPI")
        // console.log('nextseen movies ', nextWatchMovies)
        let nextWatchMoviesTemp = await moviesAPI.getNextWatchMovies()
        console.log("next seen stuff", nextWatchMoviesTemp)
        setNextWatchMovies(nextWatchMoviesTemp)
           console.log('nextseen movies ', nextWatchMovies)
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