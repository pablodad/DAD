var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/datos', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});

var models = require('./models/datos')(app, mongoose);

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Prueba de servidor OK");
});

app.use(router);
//ULTIMA PARTE
var DATOSCtrl = require('./controllers/datos');

// API routes
var datos = express.Router();

datos.route('/datos')
  .get(DATOSCtrl.findAllDATOS)
  .post(DATOSCtrl.addDATOS);

datos.route('/datos/:id')
  .get(DATOSCtrl.findById)
  .put(DATOSCtrl.updateDATOS)
  .delete(DATOSCtrl.deleteDATOS);

app.use('/api', datos);
//HASTA AQUI
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});