
// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';
const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function addToMyMovies(movieId, movieTitle, check){
  console.log('add to user model step 2 ', movieId)
  
  return sendRequest(`${BASE_URL}/movies/`, 'POST',{ movieId})
}