const Sequelize = require("sequelize");
const conexao = new Sequelize("gamestorrent","root","root",{
    host: "localhost",
    dialect: "mysql"
});


module.exports = conexao;