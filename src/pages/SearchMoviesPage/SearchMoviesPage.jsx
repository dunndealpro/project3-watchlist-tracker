import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import MyWatchList from "../../components/MyWatchList/MyWatchList";
import SelectedMovieDetails from "../../components/SelectedMovieDetails/SelectedMovieDetails";
import SearchResults from "../../components/SearchResults/SearchResults";
import "./SearchMoviesPage.css"
import * as moviesAPI from "../../utilities/movies-api"
import * as usersAPI from "../../utilities/users-api"
import NextWatchMovies from "../../components/NextWatchMovies/NextWatchMovies";


export default function SearchMoviesPage() {
    const [movies, setMovies] = useState({});
    const [search, setSearch] = useState('');
    const [selectedMovie, setSelectedMovie] = useState({})
    const [selectedDisplay, setSelectedDisplay] = useState({})
    // const [nonSeenMovies, setNonSeenMovies] = useState([])

    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&include_adult=false`
    

    const getMovies = async () => {  

        try {
            console.log("Search: ", search)
            const response = await fetch(url);
            const data = await response.json()
           setMovies(data);
           console.log(movies)           
        } catch (error) {
            console.log("Error!!>!>!")
            console.error(error);
        }
    }

    useEffect(() => {
        getMovies();
    // handleSelectMovie()
    // getNonSeenMovies()
      }, []);

    const onChangeHandler = e => {
        setSearch(e.target.value);
    }

    const handleSelectMovie = async e => {
        const movieSelect = e
        console.log("Test")
        console.log("Logging click event", e)
        setSelectedMovie(movieSelect)
        console.log("Showing clicked movie: ", selectedMovie)
        
        try {
            const selectedUrl = `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${API_KEY}&language=en-US`
            const response = await fetch(selectedUrl).then(res => res.json());
            // const data = await response.json();
            setSelectedDisplay(response);
            console.log(response)
            console.log(selectedDisplay)
        }catch(error){
            console.log("Error!!>!>!")
            console.error(error);
        }       
    }
    
    async function handleAddToMyMovies(movieId, movieTitle, check){
        console.log("Add to my movies ", movieId,movieTitle,check)
        const movie = await moviesAPI.addMovieToMyMovies(movieId, movieTitle, check)
        const myMovie = await usersAPI.addToMyMovies(movieId)
        console.log(movie)
        console.log("User Model My Movies?", myMovie)
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
            <NextWatchMovies />
            </div>
        </div>
    )
}