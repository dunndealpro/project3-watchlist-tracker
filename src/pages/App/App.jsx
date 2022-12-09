import { useState, useEffect } from "react"

import AuthPage from '../AuthPage/AuthPage';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import MyMoviesPage from '../MyMoviesPage/MyMoviesPage';
import MyShowsPage from '../MyShowsPage/MyShowsPage';
import MyActorsPage from '../MyActorsPage/MyActorsPage';
import MyWatchPage from '../MyWatchPage/MyWatchPage';
import SearchMoviesPage from '../SearchMoviesPage/SearchMoviesPage';
import SearchShowsPage from '../SearchShowsPage/SearchShowsPage';
import SearchActorsPage from '../SearchActorsPage/SearchActorsPage';
import * as moviesAPI from "../../utilities/movies-api"
import * as usersAPI from "../../utilities/users-api"

import './App.css';

export default function App() {

  const [user, setUser] = useState(getUser())
  const [movies, setMovies] = useState({});
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState({})
  const [selectedDisplay, setSelectedDisplay] = useState({})
  const [alreadyWatchedMovies, setAlreadyWatchedMovies] = useState([])

  const API_KEY = "a72c1d466153d06b65f2879b369031d8"
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&include_adult=false`

  const getMovies = async () => {    
    try {
      console.log("Search: ", search)
      const response = await fetch(url).then(res => res.json());      
      { setMovies(response) };
      console.log(response);
    } catch (error) {
      console.log("Error!!>!>!")
      console.error(error);
    }
    console.log(movies)
  }

  useEffect(() => {
    getAlreadyWatchedMovies()
  }, []);

  let selectedUrl

  function handleSelectMovie(e) {
    const movieSelect = e
    console.log("Test")
    console.log("Logging click event", e)
    setSelectedMovie(movieSelect)
    console.log("Showing clicked movie: ", selectedMovie)
    selectedUrl = `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${API_KEY}&language=en-US`
    displaySelected()
  }

  async function displaySelected() {
    console.log("Showing clicked movie: x2 ", selectedUrl)
    console.log("Showing clicked movie: x2 ", selectedMovie)
    const response = await fetch(selectedUrl).then(res => res.json());
    { setSelectedDisplay(response); }
    console.log(response)
    console.log(selectedDisplay)
  }

  async function handleAddToMyMovies(movieId, movieTitle) {
    console.log("Add to my movies ", movieId, movieTitle)
    const movie = await moviesAPI.addMovieToMyMovies(movieId, movieTitle)
    const myMovie = await usersAPI.addToMyMovies(movieId)
    console.log(movie)
    console.log("User Model My Movies?", myMovie)
    getAlreadyWatchedMovies()
    setSelectedMovie(selectedMovie)
    setSelectedDisplay(selectedDisplay)
    setSearch(search)
  }

  async function handleDeleteFromMyMovies(movieId) {
    console.log("delete from my movies model ", movieId)
    const movie = await usersAPI.deleteFromMyMovies(movieId)
    console.log(movie)
    getAlreadyWatchedMovies()
    setSelectedDisplay(null)
  }


  async function getAlreadyWatchedMovies() {
    console.log("ALREADY! pre moviesAPI", alreadyWatchedMovies)
    let alreadyWatchedTemp = await moviesAPI.getAlreadyWatchedMovies()
    setAlreadyWatchedMovies(alreadyWatchedTemp)
  }

  return (
    <main className="App">

      {user
        ?
        <>
          <NavBar user={user} setUser={setUser} setAlreadyWatchedMovies={setAlreadyWatchedMovies} />
          <Routes>
            <Route path="/" element={<LandingPage user={user} />} />
            <Route path="/movies" element={<MyMoviesPage
              search={search}
              setSearch={setSearch}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
              selectedDisplay={selectedDisplay}
              setSelectedDisplay={setSelectedDisplay}
              setAlreadyWatchedMovies={setAlreadyWatchedMovies}
              alreadyWatchedMovies={alreadyWatchedMovies}
              handleDeleteFromMyMovies={handleDeleteFromMyMovies}
            />} />
            <Route path="/shows" element={<MyShowsPage />} />
            <Route path="/actors" element={<MyActorsPage />} />
            <Route path="/watch" element={<MyWatchPage />} />
            <Route path="/search/movies" element={<SearchMoviesPage
              movies={movies}
              setMovies={setMovies}
              search={search}
              setSearch={setSearch}
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
              selectedDisplay={selectedDisplay}
              setSelectedDisplay={setSelectedDisplay}
              getMovies={getMovies}
              handleSelectMovie={handleSelectMovie}
              handleAddToMyMovies={handleAddToMyMovies}
              alreadyWatchedMovies={alreadyWatchedMovies}

            />} />
            <Route path="/search/shows" element={<SearchShowsPage />} />
            <Route path="/search/actors" element={<SearchActorsPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
      <a id="footer" href="https://www.themoviedb.org/" target="_blank">Powered by TMDB.com</a>
    </main>
  );
}


