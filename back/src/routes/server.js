const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors')
const router = require("../routes/index.js");




// middleware para poder traer info del body 
app.use(express.json())
app.use(cors())

app.use('/', router)

app.listen(PORT, ()=> console.log('has being created a sever in the port 3001'))


//del HW anterior M3
/* const http = require("http");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const data = require("../utils/data.js");

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');

    let id = req.url.split("/").at(-1);

    if(req.url.includes("onsearch")){
        getCharById(res, id);
    }

    if(req.url.includes("detail")){
        getCharDetail(res, id);
    }
}
).listen(3001, () => {
    console.log("server levantado");
}); */

//como lo tenia antes
/* var http = require ("http");
const getCharById = require ("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")

module.export =

http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    let id = req.url.split("/").at(-1);//significa que en el ultimo array queda el id y esta separado por una /

    if(req.url(id).includes("onsearch")){ 
        getCharById(res, id)
    }
    if(req.url(id).includes("detail")){
     getCharDetail(res, id)
    }
}).listen(3001,"localhost") */


