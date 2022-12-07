import * as moviesAPI from "../../utilities/movies-api"
import MovieListItem from "../../components/MovieListItem/MovieListItem"
import { useState, useEffect } from "react"

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
            <h1>My Movies Page</h1>
            <div> 
                    <ul>
                        {myMovies.map((movies) => ( 
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