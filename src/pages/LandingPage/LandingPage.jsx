import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { checkToken } from "../../utilities/users-service";
import { useEffect, useState } from 'react';
import './LandingPage.css'

import LandingPoster from "../../components/LandingPoster/LandingPoster";
import LocationTitle from "../../components/LocationTitle/LocationTitle";
import SearchMoviesBtn from "../../components/SearchMovies/SearchMovies";
// import { Routes, Route } from 'react-router-dom';

export default function LandingPage() {
    async function handleCheckToken() {
        const expDate = await checkToken();
        console.log(expDate);
    }
    return (
        <div className="landing-page">
            <h1>Welcome to MyWatch!</h1>
            <h4>(witty comment goes here)</h4>
            <Link className="landing-link" to="/search/movies">Search Movies</Link>&nbsp; | &nbsp;
            <Link className="landing-link" to="/movies">MyMovies</Link>
            <LandingPoster />

        </div>
    )
}

