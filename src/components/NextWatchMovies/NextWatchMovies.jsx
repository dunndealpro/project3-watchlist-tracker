import * as moviesAPI from "../../utilities/movies-api"
import MovieListItem from "../MovieListItem/MovieListItem"
import { useState, useEffect } from "react"

export default function NextWatchMovies(){
    const [nextWatchMovies, setNextWatchMovies] = useState([])

    async function getNextWatchMovies(){
        let nextWatchMoviesTemp = await moviesAPI.getNextWatchMovies()
        setNextWatchMovies(nextWatchMoviesTemp)
    }

    useEffect(() => {
        getNextWatchMovies()
      }, []);
    
    return(
        <div>
            My Watch List Goes Here!!
            <br />
            <div> 
                    <ul>
                        {nextWatchMovies.map((movies) => ( 
                            <MovieListItem 
                            key={movies.title} 
                            movie={movies} 
                            />
                        ))}
                    </ul>
                </div>         
        </div>
    )
}