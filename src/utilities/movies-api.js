import sendRequest from "./send-request";

const BASE_URL = '/api/movies';

// const payDirt = [{movieId},{ movieTitle}, {check}]

export function addMovieToMyMovies(movieId, movieTitle, check){
    console.log('add to my movies step 2 ', movieId, movieTitle, check)
    const payDirt = [movieId,movieTitle, check]
    console.log('payDirt', payDirt)
    return sendRequest(`${BASE_URL}/mymovies/${movieId}`, 'POST', payDirt)
}

