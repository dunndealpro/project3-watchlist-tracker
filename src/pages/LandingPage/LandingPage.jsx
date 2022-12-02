import { checkToken } from "../../utilities/users-service";
// import { Routes, Route } from 'react-router-dom';

export default function LandingPage({ user }) {
    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
      }
    return (
        <div>
            <h1>Evan's Landing Page Brah</h1>
            <h1>{user.name}</h1>


            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </div>
    )
}

