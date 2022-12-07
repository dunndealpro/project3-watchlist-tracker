const Movie = require('../../models/movie')
// const { movie } = require('../../routes/api/movies')

module.exports = {
    addToMyMovies,
    getNextWatchMovies,
    getAlreadyWatchedMovies,
    deleteFromMyMovies
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

async function getAlreadyWatchedMovies(req, res){
    console.log("Already Watched testing")
    const alreadyWatchedMovies = await Movie.find({haveSeen: false})
    // console.log(alreadyWatchedMovies)
    console.log("non seem movies", alreadyWatchedMovies) 
    res.json(alreadyWatchedMovies)
}
async function getNextWatchMovies(req, res){
    console.log("Newxt Watch testing")
    const nextWatchMovies = await Movie.find({haveSeen: true})
    // console.log(nextWatchMovies)
    console.log("non seem movies", nextWatchMovies) 
    res.json(nextWatchMovies)
}

async function deleteFromMyMovies(req, res){
    console.log("terminal comment Delete", req.body.id)
    const movieToDelete = await Movie.findOneAndDelete({id: req.body.id }) 
    console.log(movieToDelete)
    res.json(movieToDelete)
}


