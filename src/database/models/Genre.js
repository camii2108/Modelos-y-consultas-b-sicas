/*Creando archivo Genre*/ 
/* contiene una funcion que recibe dos parametros y puede ser anonima */
module.exports = (sequelize, dataTypes) => {
const alias = "Genre";
const cols = {
/*Van las constrains  o los nombres d elas porpiedades que pide sql INTEGER: entero*/
    id: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
       type: dataTypes.STRING(100) ,
        allowNull: false,
    },
    ranking: {
        type: dataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
    }, 
    active: {
        type: dataTypes.BOOLEAN,
        allowNull: false,
    },
}
const config = {
    tableName: "genres",
    timestamps: false,
}

const Genre = sequelize.define(alias, cols, config)
return Genre;
}