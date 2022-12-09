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

import './App.css';

export default function App() {

  const [user, setUser] = useState(getUser())
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState('Mean Girls');
  const [selectedMovie, setSelectedMovie] = useState({})
  const [selectedDisplay, setSelectedDisplay] = useState({})

  const API_KEY = "a72c1d466153d06b65f2879b369031d8"
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&include_adult=false`

  const getMovies = async () => {
    // console.log({movies})
            try {
                console.log("Search: ", search)
                const response = await fetch(url).then(res => res.json());
                // const data = await response.json()
                {setMovies(response)};
            console.log(response);
            } catch (error) {
                console.log("Error!!>!>!")
                console.error(error);
            }
            console.log(movies)
        }
    
        useEffect(() => {
            getMovies();
            console.log({movies})
            console.log(movies)
            
    
            // handleSelectMovie()
            // getNonSeenMovies()
        }, []);


  return (
    <main className="App">

      {user
        ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<LandingPage user={user} />} />
            <Route path="/movies" element={<MyMoviesPage />} />
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
            />} />
            <Route path="/search/shows" element={<SearchShowsPage />} />
            <Route path="/search/actors" element={<SearchActorsPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }

    </main>
  );
}


