const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email : {
        type: String,
        required:true
    },
    likedMovies:Array
})
module.exports = mongoose.model('users',UserSchema)