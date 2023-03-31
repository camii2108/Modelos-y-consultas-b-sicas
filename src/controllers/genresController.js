const db = require("../database/models");

module.exports = {
    list: (req, res) => {
        /* Retorna la vista con todos los generos de la DB */
        /* findAll() me devuelve un objeto promise */
        db.Genre.findAll()
        .then((genres) => {
        return res./* json({genres}) */render("genresList", {genres})
        })
    },
    detail: (req,res) => {
        const genreId = req.params.id;
        /* hacemos la conasulta */
        db.Genre.findByPk(genreId)
        .then( (genre)=>{
            res.render("genresDetail", {genre})
        })
    }
}