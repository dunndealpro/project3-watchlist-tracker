import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import MyWatchList from "../../components/MyWatchList/MyWatchList";
import SelectedMovieDetails from "../../components/SelecetedMovieDetails/SelectedMovieDetails";
import SearchResults from "../../components/SearchResults/SearchResults";
import "./SearchMoviesPage.css"
import * as moviesAPI from "../../utilities/movies-api"


export default function SearchMoviesPage() {
    const [movies, setMovies] = useState({});
    const [search, setSearch] = useState('');
    const [selectedMovie, setSelectedMovie] = useState({})
    const [selectedDisplay, setSelectedDisplay] = useState({})
    // const [nonSeenMovies, setNonSeenMovies] = useState([])

    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&include_adult=false`
    const selectedUrl = `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${API_KEY}&language=en-US`

    const getMovies = async () => {  

        try {
            console.log("Search: ", search)
            const response = await fetch(url);
            const data = await response.json()
            await setMovies(data);
            await console.log(movies)           
        } catch (error) {
            console.log("Error!!>!>!")
            console.error(error);
        }
    }

    useEffect(() => {
        getMovies();
    handleSelectMovie()
    // getNonSeenMovies()
      }, []);

    const onChangeHandler = e => {
        setSearch(e.target.value);
    }

    const handleSelectMovie = async e => {
        const movieSelect = e
        setSelectedMovie(movieSelect)
        console.log("Test")
        console.log("Logging click event", e)
        console.log("Showing clicked movie: ", selectedMovie)

        try {
            const response = await fetch(selectedUrl);
            const data = await response.json();
            setSelectedDisplay(data);
            console.log(data)
            console.log(selectedDisplay.budget)
        }catch(error){
            console.log("Error!!>!>!")
            console.error(error);
        }
    }
    
    async function handleAddToMyMovies(movieId, movieTitle, check){
        console.log("Add to my movies ", movieId,movieTitle,check)
        const movie = await moviesAPI.addMovieToMyMovies(movieId, movieTitle, check)
        console.log(movie)
    }

    // async function getNonSeenMovies(){
    //     console.log("non seen testing pre moviesAPI")
    //     // console.log('nonseen movies ', nonSeenMovies)
    //     const nonSeenMovies = await moviesAPI.getNonSeenMovies()
    // }

    return (
        <div>
            <h1>Search Movies Page</h1>

            <input type="text" value={search} onChange={onChangeHandler} />
            <button type="submit" onClick={getMovies}>Search</button>
           
            <div className = "search-movies-main">
            <SearchResults movies={movies} handleSelectMovie={handleSelectMovie}/>
            <SelectedMovieDetails selectedDisplay={selectedDisplay} handleAddToMyMovies={handleAddToMyMovies}/>
            <MyWatchList />
            </div>
        </div>
    )
}