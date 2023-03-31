const db = require("../database/models");
const Op = db.Sequelize.Op;


module.exports = {
    list : (req, res)  => {
        db.Movie.findAll()
        .then((movies) => {
            return res.render("moviesList", {movies})
        })
    },
    new : (req, res)  => {
        db.Movie.findAll({
            order: [["release_date", "DESC"]]/* ordenada por la columna release_date y en orden desendente */
        })
        .then(movies => res.render("newestMovies", {movies}))
    },
    recomended : (req, res)  => {
        db.Movie.findAll({
           where: {
            rating: {[Op.gte]: 8 },/* Op.gte el valor mayor o igual a 8 */
           },
           order: [["rating", "DESC"]],
           limit: 5,
        })
        .then(movies => res.render("recommendedMovies", {movies}))/* capturamos con then */
    },
    detail : (req,res)  => {
        const movieId = req.params.id;

        db.Movie.findByPk(movieId)
        .then(movie => {
            return res.render("moviesDetail", {movie})
        })
    },
}