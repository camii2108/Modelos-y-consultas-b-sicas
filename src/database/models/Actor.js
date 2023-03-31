/*Creando archivo Genre*/ 
/* contiene una funcion que recibe dos parametros y puede ser anonima */
module.exports = (sequelize, dataTypes) => {
    const alias = "Actor";
    const cols = {
    /*Van las constrains  o los nombres d elas porpiedades que pide sql INTEGER: entero*/
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,/* clave foranea */ 
        },
        first_name: {
           type: dataTypes.STRING(100),
           allowNull: false,
        },
        last_name: {
           type: dataTypes.STRING(100),
           allowNull:false,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1)
        }
    }
    let config = {
        tableName: "actors",
        createdAt: "created_at",/* para decirle a la variable la columna */
        updatedAt: "updated_at"/*  */
    }
    
    const Actor = sequelize.define(alias, cols, config);
    return Actor;
    }