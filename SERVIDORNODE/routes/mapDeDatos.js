module.exports = function(app) {

	var mapDeDatos = require('../models/mapDeDatos.js');
	//FUNCION GET
	findById = function(req,res){
		mapDeDatos.findById(req.param.id, function(err, mapDeDatos) {
			if(!err){
				res.send(dato);
			}else{
				console.log('ERROR:' + err);
			}
		});
	};	
	//FUNCION POST
	addDatos = function(req,res){
		console.log('POST');
		console.log(req,body);
		
		var mapDeDatos = new mapDeDatos({
			
				clave: req.body.clave,
				dato:  req.body.dato,
		});
		
		mapDeDatos.save(function(err) {
			if(!err){
				console.log('Agregado correctamente');
			}else{
				console.log('Error: ' + err);
				}
		});
		
		res.send(mapDeDatos);
	};
	
	//PUT
	updateClave = function(req,res) {
		mapDeDatos.findById(req.params.id, function(err,mapDeDatos){
			
			mapDeDatos.clave = req.body.clave;
			mapDeDatos.dato  = req.body.dato;
			
			mapDeDatos.save(function(err) {
				if(!err){
				console.log('Updated');
				}else{
				console.log('Error: ' +err);
				}
				
				res.send(mapDeDatos);
			});
		});
	}
	
	//DELETE
	deleteDato = function(req,res) {
	mapDeDatos.findById(req.params.id, function(err,mapDeDatos){
		mapDeDatos.remove(function(err) {
			if(!err){
			console.log('Eliminado correctamente');
			}else{
			console.log('Eror: ' + err);
			}
		})
		});
	}
	
	//Unir peticiones a las funciones
	app.get('/mapDeDatos/:clave',findById);
	app.post('/mapDeDatos',addDatos);
	app.put('/mapDeDatos/:clave',updateClave);
	app.delete('/mapDeDatos/:clave',deleteDato);
	
	
	
	}