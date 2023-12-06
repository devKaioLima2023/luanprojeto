const express = require("express")
const routes = express.Router();
const Games = require("./Games")


routes.get("/admin/gamestorrent/new",(req, res)=>{
    res.render("admin/new")
});


routes.get("/admin/gamestorrent/gerenciadordegames",(req, res)=>{
    res.render("admin/login")
});

routes.post("/admin/gamestorrent/gerenciadordegames"),(req,res) => {
    Games.findAll({order: [['id', 'DESC']]}).then((games)=>{
        res.render("admin/index",{games:games})
    })
}

routes.post("/salvagame",(req, res)=>{
    const {nome,imagem,requisito,descrição,linkDownload} = req.body;
    Games.create({
        nome: nome,
        imagem: imagem,
        requisito: requisito,
        descrição: descrição,
        linkDownload: linkDownload
    }).then(()=> res.redirect("/admin/gamestorrent/gerenciadordegames"))
});

routes.post("/deletagame",(req, res)=>{
    const {id} = req.body;
    Games.destroy({where:{id:id}}).then(()=> res.redirect("/"))
})

routes.get("/admin/gamestorrent/edit/:id",(req, res)=>{
    const {id} = req.params;
    Games.findByPk(id).then(game=>{
        res.render("admin/edit",{game:game})
    });
})

routes.post("/atualizagame",(req, res)=>{
    const {nome,imagem,requisito,descrição,linkDownload,id} = req.body;
    Games.update({nome:nome,imagem:imagem,requisito:requisito,descrição:descrição,linkDownload:linkDownload},{where:{id:id}}).then(()=>res.redirect("/admin/gamestorrent/gerenciadordegames"))
})


routes.get("/gametorrent/:nome",(req, res)=>{
    const {nome} = req.params;
    console.log(nome)
    Games.findOne({where:{nome:nome}}).then(game =>{
        if(game != undefined){
            res.render("modal",{game:game})
        }else{
            res.redirect("/")
        }
    })
});




module.exports = routes;


