import * as moviesAPI from "../../utilities/movies-api"
import MovieListItem from "../MovieListItem/MovieListItem"
import { useState, useEffect } from "react"

export default function MyWatchList(){
    // let nonSeenMovies =  getNonSeenMovies()
    // console.log("My watch list: ", nonSeenMovies)

    const [nonSeenMovies, setNonSeenMovies] = useState([])

    console.log('hey there')

    async function getNonSeenMovies(){
        console.log("non seen testing pre moviesAPI")
        // console.log('nonseen movies ', nonSeenMovies)
        let nonSeenMoviesTemp = await moviesAPI.getNonSeenMovies()
        console.log("non seen stuff", nonSeenMoviesTemp)
        setNonSeenMovies(nonSeenMoviesTemp)
           console.log('nonseen movies ', nonSeenMovies)
    }
    // console.log(nonSeenMovies[20].title)

    useEffect(() => {
        getNonSeenMovies()
      }, []);
    
    // getNonSeenMovies()
    
    return(

        <div>
            My Watch List Goes Here
            <br />
            {/* {nonSeenMovies[20].title} */}

            <div> 
                    <ul>
                        {nonSeenMovies.map((movies) => ( 
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