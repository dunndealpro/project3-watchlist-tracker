const Movie = require('../../models/movie')

module.exports = {
    addToMyMovies,
}

function addToMyMovies(req, res){
    console.log("add movie")
    let movie = new Movie(req)
    res.json(movie)
}