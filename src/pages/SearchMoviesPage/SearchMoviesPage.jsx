import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import MyWatchList from "../../components/MyWatchList/MyWatchList";
import SelectedMovieDetails from "../../components/SelecetedMovieDetails/SelectedMovieDetails";
import SearchResults from "../../components/SearchResults/SearchResults";
import "./SearchMoviesPage.css"


export default function SearchMoviesPage() {
    const [movies, setMovies] = useState({});
    const [search, setSearch] = useState('');
    const [selectedMovie, setSelectedMovie] = useState({})

    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&include_adult=false`
    const selectedUrl = `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${API_KEY}&language=en-US`

    const getMovies = async () => { 
        try {
            console.log("Search: ", search)
            const response = await fetch(url);
            const data = await response.json()
            setMovies(data);
            console.log(data)           
        } catch (error) {
            console.log("Error!!>!>!")
            console.error(error);
        }
    }

    // useEffect(() => {
    //     getMovies();
    //   }, []);

    const onChangeHandler = e => {
        setSearch(e.target.value);
    }

    const handleSelectMovie =async (e) => {

        console.log("Test")
        console.log(e)
        const movieSelect = await e
        setSelectedMovie(movieSelect)
        console.log(selectedMovie)
    }
    
   
        // selectedMovieId = 
        // setSelectedMovie(selectedMovieId)
    

    return (
        <div>
            <h1>Search Movies Page</h1>
            <input type="text" value={search} onChange={onChangeHandler} />
            <button type="submit" onClick={getMovies}>Search</button>
            <div className = "search-movies-main">
            <SearchResults movies={movies} handleSelectMovie={handleSelectMovie}/>
            <SelectedMovieDetails selectedMovie={selectedMovie}/>
            <MyWatchList/>
            </div>
        </div>
    )
}