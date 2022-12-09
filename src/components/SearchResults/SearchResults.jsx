import MovieListItem from "../MovieListItem/MovieListItem"
import "./SearchResults.css"

export default function SearchResults(props) {


    // moviesTest()

    // const posterUrl = `https://image.tmdb.org/t/p/original/${movies.results[0].poster_path}`

    // console.log("Results: ", movies.results[0].title)
    console.log("Search Results: ", props.movies)
    return (
        <div>
            Search Results
            <div className="search-container">            {props.movies.results ?                
                <div> 
                    <ul className="search-results">
                        {props.movies.results.map((movie) => ( 
                            <MovieListItem 
                            key={movie.id} 
                            movie={movie} 
                            handleSelectMovie={props.handleSelectMovie}
                            />
                        ))}
                    </ul>
                </div>           
                :
                <p> Please Enter a movie in the search box</p>
            }
            </div>
            
        </div>
    )
}