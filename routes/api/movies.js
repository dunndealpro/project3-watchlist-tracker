const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies')

router.get('/movies/', moviesCtrl.getAlreadyWatchedMovies)
// router.get('/movies/', moviesCtrl.getNextWatchMovies)
router.post('/mymovies/:id', moviesCtrl.addToMyMovies)
// router.delete('/movies/', moviesCtrl.deleteFromMyMovies)

module.exports = router;