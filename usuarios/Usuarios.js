const Sequelize = require("sequelize");
const conexao = require("../database/database");

const Usuarios = conexao.define("usuarios",{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Usuarios.sync({force:false});

module.exports = Usuarios