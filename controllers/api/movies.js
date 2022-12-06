const Movie = require('../../models/movie')

module.exports = {
    addToMyMovies,
}


async function addToMyMovies(req, res){
    // console.log('testing', req.params)
    const movie = await Movie.getMovies(req.params.id, req.payload)
    await console.log("movie:   ", req.params.id)
    // console.log(req)
    // res.console.log("huh") 
    // let movie = new Movie(req)
    // console.log(res.json())
    res.json(movie)
}