import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import MyWatchList from "../../components/MyWatchList/MyWatchList";
import SelectedMovieDetails from "../../components/SelectedMovieDetails/SelectedMovieDetails";
import SearchResults from "../../components/SearchResults/SearchResults";
import "./SearchMoviesPage.css"
import * as moviesAPI from "../../utilities/movies-api"
import * as usersAPI from "../../utilities/users-api"
import AlreadyWatchedMovies from "../../components/AlreadyWatchedMovies/AlreadyWatchedMovies";
import NextWatchMovies from "../../components/NextWatchMovies/NextWatchMovies";
// {movies, setMovies, search, setSearch, selectedMovie, setSelectedMovie, selectedDisplay, setSelectedDisplay, getMovies}

export default function SearchMoviesPage(props) {
    // const [movies, setMovies] = useState({});
    // const [search, setSearch] = useState('');
    // const [selectedMovie, setSelectedMovie] = useState({})
    // const [selectedDisplay, setSelectedDisplay] = useState(null)
    // const [nonSeenMovies, setNonSeenMovies] = useState([])

    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${props.search}&include_adult=false`


    //     const getMovies = async () => {
    // // console.log({movies})
    //         try {
    //             console.log("Search: ", search)
    //             const response = await fetch(url).then(res => res.json());
    //             // const data = await response.json()
    //             {setMovies(response)};
    //         console.log(response);
    //         } catch (error) {
    //             console.log("Error!!>!>!")
    //             console.error(error);
    //         }
    //         console.log(movies)
    //     }

    //     useEffect(() => {
    //         getMovies();
    //         console.log({movies})
    //         console.log(movies)


    //         // handleSelectMovie()
    //         // getNonSeenMovies()
    //     }, []);

    const onChangeHandler = e => {
        { props.setSearch(e.target.value) };
    }

    let selectedUrl

    return (
        <div>
            <h1>Search Movies Page</h1>

            <input className="search-input"type="text" value={props.search} onChange={onChangeHandler} placeholder="enter movie here" />
            <button type="submit" onClick={props.getMovies}>Search</button>

            <div className="search-movies-main">
                <SearchResults
                    movies={props.movies}
                    handleSelectMovie={props.handleSelectMovie} />
                {props.selectedDisplay ? <SelectedMovieDetails
                    selectedDisplay={props.selectedDisplay}
                    handleAddToMyMovies={props.handleAddToMyMovies} />
                    :
                    <p></p>}
                <AlreadyWatchedMovies
                    alreadyWatchedMovies={props.alreadyWatchedMovies} />
            </div>
        </div>
    )
}