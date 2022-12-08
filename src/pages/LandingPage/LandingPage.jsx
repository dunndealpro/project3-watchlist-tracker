import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { checkToken } from "../../utilities/users-service";
import { useEffect, useState } from 'react';

import LandingPoster from "../../components/LandingPoster/LandingPoster";
import LocationTitle from "../../components/LocationTitle/LocationTitle";
import SearchMoviesBtn from "../../components/SearchMovies/SearchMovies";
// import { Routes, Route } from 'react-router-dom';

export default function LandingPage({ user }) {

    // const [landingPoster, setLandingPoster] = useState({})

    // const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    // const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    // let photoUrl1
    // let photoUrl2
    // let photoUrl3
    // let photoUrl4

    // useEffect(() => {
    //     // console.log("get landing poster?")
    //     getLandingPoster()
    //     // console.log(landingPoster)
    //     // const photoUrl1 = `https://image.tmdb.org/t/p/original/${landingPoster.results[2].poster_path}`
        
    // }, [])

    // const getLandingPoster = async () => {
    //     try {
    //         const response = await fetch(url).then(res=> res.json());
    //         // const data = await response.json();
    //         setLandingPoster(response)
    //         // console.log("poster working? ", response)
    //         // console.log(landingPoster.results[0]) 
    //     } catch (error) { 
    //         console.log("Error! ", error) 
    //     }
    // }

    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
    }
    return (
        <div>
            <h1>Welcome {user.name} to MyWatch!</h1>
            
           <Link to="/search/movies">Search Movies</Link>&nbsp; | &nbsp;
           <Link to="/search/shows">Search Shows</Link>&nbsp; | &nbsp;
           <Link to="/search/actors">Search Actors</Link>

            {/* <LocationTitle /> */}
            {/* <SearchMovies/> */}
            <LandingPoster />

            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )
}

