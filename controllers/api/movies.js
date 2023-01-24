const Movie = require('../../models/movie')
const User = require('../../models/user')
// const { movie } = require('../../routes/api/movies')

module.exports = {
    addToMyMovies,
    // getNextWatchMovies,
    getAlreadyWatchedMovies,
    deleteFromMyMovies
}


async function addToMyMovies(req, res){
    console.log('testing', req.params, req.body)
    const movie = await Movie.getMovies(parseInt(req.params.id), req.body.title)
    console.log("movie:   ", movie)
    // console.log(req)
    // res.console.log("huh") 
    // let movie = new Movie(req)
    // console.log(res.json())
    res.json(movie)
}

async function getAlreadyWatchedMovies(req, res){
    console.log("Already Watched testing")
    let user =  await User.findById( req.user._id).populate('myMovies').exec()
    let alreadyWatchedMovies = user.myMovies
    console.log("USer: ", user)
    console.log("my movies", alreadyWatchedMovies) 
    console.log("Logged in user: ", alreadyWatchedMovies)
    res.json(alreadyWatchedMovies)
}

async function getNextWatchMovies(req, res){
    console.log("Next Watch testing")
    const nextWatchMovies = await Movie.find({haveSeen: true})
    // console.log(nextWatchMovies)
    console.log("next watch movies", nextWatchMovies) 
    res.json(nextWatchMovies)
}

async function deleteFromMyMovies(req, res){
    console.log("terminal comment Delete", req.body.id)
    const movieToDelete = await Movie.findOneAndDelete({id: req.body.id }) 
    console.log(movieToDelete)

    res.json(movieToDelete)
}


