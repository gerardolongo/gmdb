var	telefilm = require('./routes/telefilm');
var token = require('./routes/token') 
var find = require('./routes/find');
var del = require('./routes/delete');
var create = require('./routes/create');
const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
BSON = require('bson');
const PORT = process.env.PORT || 3000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/gmdb/:id', find.findById)
  .get('/gmdb', find.findAll)
  .post('/gmdb', create.addTeleFilm)
  .delete('/gmdb/:id', del.deleteTeleFilm)
  .post('/gmdb/token', token.add)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


