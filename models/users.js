const { Datatypes } = require("sequelize");

const sequelize = require("../db/connect");

//user table schema
const User = sequelize.define("User", {
    id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, 
    user_name:{
        type: Datatypes.STRING(50),
        allowNull: false,
    }, 
    // last_name:{
    //     type: Datatypes.STRING(50),
    //     allowNull: false,
    // }, 
    email:{
        type: Datatypes.STRING(50),
        allowNull: false,
    }, 
    password:{
        type: Datatypes.STRING(255),
        allowNull: false,
    },
});

module.exports = User;