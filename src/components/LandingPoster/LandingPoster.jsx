import { useEffect, useState } from 'react';

export default function LandingPoster() {

    const [landingPoster, setLandingPoster] = useState()

    const API_KEY = "a72c1d466153d06b65f2879b369031d8"
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`

    useEffect(() => {
        getLandingPoster()
    }, [])

    const getLandingPoster = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLandingPoster(data)
            console.log("poster working? ", typeof landingPoster)
        } catch (error) {
            console.log("Error! ", error)
        }
    }

    return (
        <div>
            <img src="https://www.penbaypilot.com/sites/default/files/2020/03/field/image/MaineMovies200+previewsm.png" alt="" />
        </div>
    )
}