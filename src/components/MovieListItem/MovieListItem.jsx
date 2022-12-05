import "./MovieListItem.css"
export default function MovieListItem({ movie, handleSelectMovie }) {
    // console.log("huh? ")

    let movieTitle
    let posterUrl

    const clickTest = e => {

        // console.log("Test ", movie.id)
    }

    if (movie) {
        // console.log(movie.title)
        movieTitle = movie.title

        posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    } else { movieTitle = "False" }

    return (
        <div className="search-results-poster">
            <button onClick={() => handleSelectMovie(movie.id)}> {movieTitle}
                <br />
                {movie.id}
                <img src={posterUrl} alt="" /></button>
        </div>

    )
}