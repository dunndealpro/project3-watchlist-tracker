import "./MovieListItem.css"
export default function MovieListItem({ movie, handleSelectMovie }) {
    // console.log("huh? ")

    let movieTitle
    let posterUrl =`https://image.tmdb.org/t/p/original/${movie.poster_path}`

    // const clickTest = e => {

    //     // console.log("Test ", movie.id)
    // }

    if (movie) {
        console.log(movie)
        movieTitle = movie.title
        console.log(movie.poster_path)

        posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
        console.log(posterUrl)
    } else { movieTitle = "False" }

    return (
        <div className="search-results-poster">
            <button onClick={() => handleSelectMovie(movie.id)}> {movie.title}
                <br />              
              
                <img src={posterUrl} alt="" /></button>
        </div>

    )
}