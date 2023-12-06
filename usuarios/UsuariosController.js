const express = require("express");
const routes = express.Router();
const Usuarios = require("./Usuarios");
const Games = require("../games/Games")

routes.post("/logar", async (req, res) => {
  const  {email, senha} = req.body
  const usuarios = await Usuarios.findAll();
  let encontrado = false;
  usuarios.forEach((usuario) => {
    email === usuario.email && senha === usuario.senha
      ? (encontrado = true)
      : null;
  });
  if(encontrado){
    Games.findAll({order: [['id', 'DESC']]}).then((games)=>{
      res.render("admin/index",{games:games})
  })
  }else{
    res.render("admin/erro")
  };
});



routes.get("/cadastro", (req, res) => {
  res.render("admin/cadastro");
});

routes.post("/usuariocadastrado", async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;
  try {
    await Usuarios.create({
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha,
    });
    res.redirect("/admin/gamestorrent/gerenciadordegames");
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
  }
});

module.exports = routes;
