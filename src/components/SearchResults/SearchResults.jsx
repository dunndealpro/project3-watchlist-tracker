import MovieListItem from "../MovieListItem/MovieListItem"
import "./SearchResults.css"

export default function SearchResults(props) {
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