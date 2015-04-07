var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var datosSchema = new Schema({
  clave:    { type: String },
  dato:     { type: Number },  
});

module.exports = mongoose.model('DATOS', datosSchema);