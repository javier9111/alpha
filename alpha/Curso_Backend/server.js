const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use( bodyparser.urlencoded({extended: true} ) );

app.get('/saludo', function (req, res){

  res.send(`Hola ${req.query.name}`);
  });

  app.post('/', function(req, res){
    res.send(`hola ${req.body.name}`)
  });

app.listen(3000);
