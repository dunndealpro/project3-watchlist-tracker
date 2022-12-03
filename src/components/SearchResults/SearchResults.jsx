import MovieListItem from "../MovieListItem/MovieListItem"

export default function SearchResults({movies}){
    
function moviesTest(){
    // console.log("Test: ", movies.results[0].title) 
}

moviesTest()

const posterUrl = `https://image.tmdb.org/t/p/original/${movies.results[2].poster_path}`

// console.log("Results: ", movies.results[0].title)
    return(
        <div>
            Search Results<br></br>
            {/* {movies.results[0].title} */}
            <MovieListItem movies={movies.results}/>
            {/* <h2>{movies.results[2].title}</h2>
            
            <img src={posterUrl} alt="" />  */}

            

            {/* {movies}.results */}

        </div>
    )
}