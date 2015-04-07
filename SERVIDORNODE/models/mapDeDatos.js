var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var mapDeDatos = new Schema({

		clave: {tpye:String},
		dato: {tpye: String},

});

module.exports = mongoose.model('mapDeDatos',mapDeDatos);