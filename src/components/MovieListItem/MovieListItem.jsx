import "./MovieListItem.css"
export default function MovieListItem({ movies }) {
    console.log("huh? ")

    let movieTitle
    let posterUrl

    if (movies.results) {
        console.log(movies.results[0].title)
        movieTitle = movies.results[0].title

        posterUrl = `https://image.tmdb.org/t/p/original/${movies.results[0].poster_path}`
    } else { movieTitle = "False" }

    return (
        <div className="search-results-poster">
            <h3>{movieTitle}</h3>
            <img src={posterUrl} alt="" />
        </div>

    )
}