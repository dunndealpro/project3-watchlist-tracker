import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { checkToken } from "../../utilities/users-service";
import LandingPoster from "../../components/LandingPoster/LandingPoster";
import LocationTitle from "../../components/LocationTitle/LocationTitle";
import SearchMoviesBtn from "../../components/SearchMovies/SearchMovies";
// import { Routes, Route } from 'react-router-dom';

export default function LandingPage({ user }) {

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

