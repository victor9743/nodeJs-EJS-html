// iniciando um servidor

const express = require('express');
const app = express();

app.set("view engine","ejs");

/*
    view engine: ferramenta de renderização html

    ejs: linguagem utilizada
*/

app.get("/", (req, res)=>{

    const itens= [
        {
            title: "D",
            message:"Uma mensagem"
        },
        {
            title: "E",
            message:"Outra mensagem"
        },
        {
            title: "M",
            message:"Mais mensagens"
        },
        {
            title: "A",
            message:"Aff , Mensagem"
        },
        {
            title: "I",
            message:"Ihhh mensagem"
        },
        {
            title: "S",
            message:"Saco de mensagem"
        },
        
    ]
    const mensagem = "Hello wolrd";
    res.render("paginas/index",{
        valores: itens,
        msg: mensagem
    });
    
})

app.get("/sobre", (req, res)=>{
    res.render("paginas/about");
    
})
// criar porta localhost
app.listen(8080);

console.log("Executando")