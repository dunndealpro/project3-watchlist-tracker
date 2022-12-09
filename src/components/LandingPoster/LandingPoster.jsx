import { useEffect, useState } from 'react';
import "./LandingPoster.css";

export default function LandingPoster() {
    const [landingPoster, setLandingPoster] = useState()
    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    let photoUrl1
    let photoUrl2
    let photoUrl3
    let photoUrl4

    useEffect(() => {
        getLandingPoster()
    }, [])

    const getLandingPoster = async () => {
        try {
            const response = await fetch(url).then(res => res.json());
            setLandingPoster(response)
        } catch (error) {
            console.log("Error! ", error)
        }
    }

    if (landingPoster) {
        photoUrl1 = `https://image.tmdb.org/t/p/original/${landingPoster.results[0].poster_path}`
        photoUrl2 = `https://image.tmdb.org/t/p/original/${landingPoster.results[1].poster_path}`
        photoUrl3 = `https://image.tmdb.org/t/p/original/${landingPoster.results[2].poster_path}`
        photoUrl4 = `https://image.tmdb.org/t/p/original/${landingPoster.results[3].poster_path}`
    }

    return (
        <div className="landing-poster">
            <h3>Trending this week</h3>
            <img src={photoUrl1} alt="" />
            <img src={photoUrl2} alt="" />
            <img src={photoUrl3} alt="" />
            <img src={photoUrl4} alt="" />
        </div>
    )
}