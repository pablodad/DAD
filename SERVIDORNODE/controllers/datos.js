var mongoose = require('mongoose');
var DATOS  = mongoose.model('DATOS');

//GET - Devuelve todos los datos en la base de datos.
exports.findAllDATOS = function(req, res) {
    DATOS.find(function(err, datos) {
    if(err) res.send(500, err.message);

    console.log('GET /datos')
        res.status(200).jsonp(datos);
    });
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
		DATOS.findById(req.params.id, function(err, datos) {
    if(err) return res.send(500, err.message);

    console.log('GET /datos/' + req.params.id);
        res.status(200).jsonp(datos);
    });
};

//POST - Insert a new TVShow in the DB
exports.addDATOS = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var datos = new DATOS({
        clave:    req.body.clave,
        dato:     req.body.dato,
    });

    datos.save(function(err, datos) {
        if(err) return res.send(500, err.message);
  res.status(200).jsonp(datos);
    });
};
//PUT - Update a register already exists
exports.updateDATOS = function(req, res) {
    DATOS.findById(req.params.id, function(err, datos) {
        datos.title   = req.body.petId;
        datos.year    = req.body.dato;
        

        datos.save(function(err) {
            if(err) return res.send(500, err.message);
   res.status(200).jsonp(datos);
        });
    });
};

//DELETE - Delete a TVShow with specified ID
exports.deleteDATOS = function(req, res) {
    DATOS.findById(req.params.id, function(err, datos) {
        datos.remove(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200);
        })
    });
};