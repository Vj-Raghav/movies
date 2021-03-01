const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');

const movieSchema = new mongoose.Schema({
    movieName  :{
        type:String,
        required:[true,"Needed"]
    },
    cast:[String]
})

model = new mongoose.model("Movie",movieSchema)

module.exports = model;