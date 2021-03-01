const express = require('express');
const handler = require('./handler')

const router = express.Router()

router.route('/movies').post(handler.addMovies)
router.route('/movies').get(handler.getMovies)
router.route('/cast/:movieName').get(handler.getCast)

module.exports = router