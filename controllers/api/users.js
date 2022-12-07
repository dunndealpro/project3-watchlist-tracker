const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Movie = require('../../models/movie');

module.exports = {
  create,
  login,
  checkToken,
  addToMyMovies
};

function checkToken(req, res) {
  console.log(req.user);
  res.json(req.exp);
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    // The token is a string, but yes, we can
    // res.json a string
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    // extra data for the payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

async function addToMyMovies(req, res){
  console.log("Add movie to user models", req.user._id)
  let user = await User.findById( req.user._id)
  let movie = await Movie.findOne({id: req.body.movieId})
  
  user.myMovies.push(movie._id)
  console.log(movie)
  user.save()
  console.log(user)
  console.log(movie._id)
  // User.myMovies.push(movieId)


  // console.log("Req.user: ", req.user.myMovies)
// console.log('suer variable', user)
// res.json(user)
// console.log(res.json(user))
}