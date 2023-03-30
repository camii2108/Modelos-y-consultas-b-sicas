const db = require("../database/models");

module.exports = {
    list: (req, res) => {
        /* Retorna la vista con todos los generos de la DB */
        db.Genre.findAll()/* me devuelve un objeto promise */
        .then((genres) => {
            return res./* json({genres}) */render("genresList", {genres})
        })
    }
}