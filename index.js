const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conexao = require("./database/database");
const Games = require("./games/Games");
const GamesController = require("./games/GamesController");
const UsuariosController = require("./usuarios/UsuariosController");
const Usuarios = require("./usuarios/Usuarios");

conexao.authenticate().then(() => console.log("O banco foi conectado!"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  Games.findAll({order: [['id', 'DESC']]}).then((games) => {
    res.render("index",{games:games});
  });
});
app.use("/", GamesController);
app.use("/", UsuariosController);

app.listen("8080", (err) =>
  err ? console.log(err) : console.log("Servidor rodando...")
);
