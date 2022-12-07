import MovieListItem from "../MovieListItem/MovieListItem"


export default function SearchResults({ movies, handleSelectMovie }) {


    if ({ movies }.results) {
        console.log("Test: ", movies.results[0].title)
        function moviesTest() {
            console.log("Test: ", movies.results[0].title)
        }
    }
    // moviesTest()

    // const posterUrl = `https://image.tmdb.org/t/p/original/${movies.results[0].poster_path}`

    // console.log("Results: ", movies.results[0].title)
    return (
        <div>
            Search Results
            <div>
            {movies.results ?                
                <div> 
                    <ul>
                        {movies.results.map((movie) => ( 
                            <MovieListItem 
                            key={movie.title} 
                            movie={movie} 
                            handleSelectMovie={handleSelectMovie}
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