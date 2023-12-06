const Sequelize = require("sequelize");
const conexao = require("../database/database");

const Games = conexao.define("games",{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    requisito:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    descrição:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    linkDownload:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});


Games.sync({force:false});

module.exports = Games;