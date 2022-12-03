import { checkToken } from "../../utilities/users-service";
import LandingPoster from "../../components/LandingPoster/LandingPoster";
import LocationTitle from "../../components/LocationTitle/LocationTitle";
// import { Routes, Route } from 'react-router-dom';

export default function LandingPage({ user }) {

    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
    }
    return (
        <div>
            <h1>Welcome {user.name} to MyWatch!</h1>
            
            {/* <LocationTitle /> */}
            <LandingPoster />

            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )
}

