var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var usuarioM = "Macri";
var contrasenaM = "1234";
var respuesta = {
    usuario: "nombre",
    contrasena: "000",
    codigo: "111"
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/bienvenido', function(req, res){
    if(req.body.usuario == usuarioM &&  req.body.contrasena == contrasenaM){
     respuesta = {
        codigo: "200",
        mensaje: "Bienvenido"
     }
    }else{
     respuesta ={
        codigo:"406",
        mensaje:"Parametros invalidos"
     } 
    }
    res.send(respuesta)
})

app.listen(3000, function(){
    console.log("Consultando API por el puerto 3000")
})