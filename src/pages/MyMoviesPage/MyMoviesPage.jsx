import SelectedMyMovieDetails from "../../components/SelectedMyMovieDetails/SelectedMyMovieDetails";
import AlreadyWatchedMovies from "../../components/AlreadyWatchedMovies/AlreadyWatchedMovies";
import "./MyMoviesPage.css"

export default function MyMoviesPage(props) {

    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    const selectedUrl = `https://api.themoviedb.org/3/movie/${props.selectedMovie}?api_key=${API_KEY}&language=en-US`

      const handleSelectMyMovie = async e => {        
        const movieSelect = e
        props.setSelectedMovie(movieSelect)
        try {
            const response = await fetch(selectedUrl);
            const data = await response.json();
            props.setSelectedDisplay(data);
        } catch (error) {            
            console.error(error);
        }
    }

    return (
        <div>
            <h1>MyMovies Page</h1>
            <div className="my-movies-main">
                <AlreadyWatchedMovies
                    handleSelectMyMovie={handleSelectMyMovie}
                    alreadyWatchedMovies={props.alreadyWatchedMovies} />
                {props.selectedDisplay ? <SelectedMyMovieDetails
                    selectedDisplay={props.selectedDisplay}
                    handleDeleteFromMyMovies={props.handleDeleteFromMyMovies}
                /> :
                    <p></p>
                }
            </div>
        </div>
    )
}