import sendRequest from "./send-request";

const BASE_URL = '/api/movies';

export function addToMyMovies{
    return sendRequest(`${BASE_URL}/mymovies`)
}