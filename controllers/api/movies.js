const Movie = require('../../models/movie')
// const { movie } = require('../../routes/api/movies')

module.exports = {
    addToMyMovies,
    getNonSeenMovies
}


async function addToMyMovies(req, res){
    console.log('testing', req.params, req.body)
    const movie = await Movie.getMovies(parseInt(req.params.id), req.body.title, req.body.haveSeen)
    await console.log("movie:   ", movie)
    // console.log(req)
    // res.console.log("huh") 
    // let movie = new Movie(req)
    // console.log(res.json())
    res.json(movie)
}

async function getNonSeenMovies(req, res){
    console.log("ctrl non seen testing")
    const nonSeenMovies = await Movie.find({})
    // console.log(nonSeenMovies)
    console.log("non seem movies", nonSeenMovies) 
    res.json(nonSeenMovies)

}