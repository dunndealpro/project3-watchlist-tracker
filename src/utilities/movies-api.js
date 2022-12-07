import sendRequest from "./send-request";

const BASE_URL = '/api/movies';

// const payDirt = [{movieId},{ movieTitle}, {check}]

export function addMovieToMyMovies(movieId, movieTitle, check){
    console.log('add to my movies step 2 ', movieId, movieTitle, check)
    
    return sendRequest(`${BASE_URL}/mymovies/${movieId}`, 'POST', {title: movieTitle, haveSeen: check })
}

export function getNonSeenMovies(){
    console.log("Nonseen step 2")
    return sendRequest(`${BASE_URL}/movies/`, 'GET',  )
}

export function getMyMovies(){
    console.log("My Movies stuff - API")
    return sendRequest(`${BASE_URL}/movies/`, 'GET',  )
}
