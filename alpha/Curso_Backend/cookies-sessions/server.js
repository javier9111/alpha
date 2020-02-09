const express = require('express');

const cookieSession = require('cookie-session');

const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['string1', 'string2']

}));


app.get('/', function(req, res){
  req.session.visits =   req.session.visits || 0;

  req.session.visits= req.session.visits + 1;
  res.send(`${req.session.visits} visitas`);
})
app.listen(3000);
