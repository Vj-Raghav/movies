
const model = require('./model')

exports.getMovies = async (req, res, next) => {
    try {
        var movieArray = []
        const getMovieName = await model.find({}, { movieName: 1, _id: 0 })
        for (var i = 0; i < getMovieName.length; i++) {
            movieArray.push(getMovieName[i].movieName)
        }
        if (movieArray.length > 0) {
            res.status(200).json(movieArray)
        } else {
            let err = new Error("Some Error")
            err.statusCode = 406
            throw err
        }
    } catch (err) {
        next(err)
    }
}
exports.getCast = async (req, res) => {
    try {
        const getCast = await model.find({ movieName: req.params.movieName }, { cast: 1, _id: 0 })
        if (getCast.length > 0) {
            res.status(200).json(getCast[0].cast)
        } else {
            let err = new Error("Some Error")
            err.statusCode = 406
            throw err
        }
    } catch (err) {
        next(err)
    }
}

exports.addMovies = async (req, res) => {
    try {
        const saveMovie = await model.create(req.body)
        res.status(200).json({ "message": "Movie Added" })
    } catch (err) {
        res.status(400).json({ "message": "Some Error " })
    }
}