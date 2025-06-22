const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("bookstore", "root", "NAVEENANDRAKESH", {
  host: "localhost",
  dialect: "mysql",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Book = require("./Book")(sequelize, DataTypes);

module.exports = db;
