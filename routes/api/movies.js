const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies')

router.get('/movies/', moviesCtrl.getNonSeenMovies)
router.post('/mymovies/:id', moviesCtrl.addToMyMovies)

module.exports = router;