/*Creando archivo Genre*/ 
/* contiene una funcion que recibe dos parametros y puede ser anonima */
module.exports = (sequelize, dataTypes) => {
const alias = "Movie";
const cols = {
/*Van las constrains  o los nombres d elas porpiedades que pide sql INTEGER: entero*/
    id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,/* clave foranea */ 
    },
    title: {
       type: dataTypes.STRING(500) ,
        allowNull: false,
    },
    rating: {
        type: dataTypes.DECIMAL(3, 1).UNSIGNED,
        allowNull: false,
    }, 
    awards: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
    },
    length: {
        type: dataTypes.INTEGER(10).UNSIGNED,
    },
    genre_id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
    },
    release_date: {
        type: dataTypes.DATE,
        allowNull:false, /* no acepta nulos */
    }
}
const config = {
    tableName: "movies",
    createdAt: "created_at",
    updatedAt: "updated_at"
}

const Genre = sequelize.define(alias, cols, config)
return Genre;
}