const {Sequelize} = require("sequelize");

//database connection
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite3"
});

module.exports = sequelize;