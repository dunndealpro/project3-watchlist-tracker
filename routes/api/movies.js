const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies')

router.post('/mymovies/:id', moviesCtrl.addToMyMovies)

module.exports = router;