const { addToLikedMovies, getLikedMovies, removeFromTheLikedMovie } = require('../controller/UserController')

const router = require('express').Router()


router.post('/add',addToLikedMovies)
router.get('/liked/:email',getLikedMovies)
router.put('/delete/',removeFromTheLikedMovie)

module.exports= router