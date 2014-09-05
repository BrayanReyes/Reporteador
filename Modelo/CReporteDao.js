var CConexion = require('./CConexion.js');
//Tiempo de espera para desconectar la base de datos
var tiemporDesconectar = 1000;
/**
* Constructor de la clase
*/
function CReporteDao(){
}
/**
* Agrega un reporte en la base de datos
* @param CReporte cReporte
*/
CReporteDao.prototype.agregarReporte = function (cReporte){
	var mongoose = new CConexion();
	var modeloReporte = this.getSchema(mongoose);
	var documentoReporte = new modeloReporte({nombre:cReporte.nombre,
		descripcion:cReporte.descripcion,
		atributos:cReporte.atributos,
		informacion:cReporte.informacion});
	documentoReporte.save(function (err, documentoReporte) {
	if (err) {
		return console.error(err);
	}
	console.log(documentoReporte);
	console.log('Agregación exitosa.');
	});
	//Desconectar seción luego de 1000 milisegundos
	setTimeout(function(){
		mongoose.disconnect();
		console.log('Desconectado');
	},tiemporDesconectar);
};
/**
* Muestra todos los reportes en el documento reportes
*/
CReporteDao.prototype.mostrarReportes = function (){
	var mongoose = new CConexion();
	var modeloReporte = this.getSchema(mongoose);
	modeloReporte.find({}, function(error, resultado){
      if(error){
         res.send('Ha surgido un error.');
      }
	console.log(resultado);
   });
	//Desconectar seción luego de 1000 milisegundos
	setTimeout(function(){
		mongoose.disconnect();
		console.log('Desconectado');	
	},tiemporDesconectar);
};
/*
*Busca un reporte en especifico a partir de una variable en la base de datos
* @param String atributoNombre
* @param String datoAtributo
*/
CReporteDao.prototype.buscarReporte = function (atributoNombre,datoAtributo){
	var mongoose = new CConexion();
	var modeloReporte = this.getSchema(mongoose);
	// Where, la sentencia a cumplir
	var query = modeloReporte.findOne({'nombre':datoAtributo});
	// Que campos desea visualizar
	query.select('nombre descripcion atributos informacion');
	// ejecuta la consulta
	query.exec(function (err, resultado) {
	if (err) {
		return handleError(err);
	}	
	console.log(resultado);
	});
	//Desconectar seción luego de 1000 milisegundos
	setTimeout(function(){
		mongoose.disconnect();
		console.log('Desconectado');
	},tiemporDesconectar);
};
/**
* Edita la descripción de un reporte y lo actualiza en la base de datos
* @param String condicion
* @param String descripcion
*/
CReporteDao.prototype.editarReporte = function(condicion,descripcion) {
	var mongoose = new CConexion();
	var modeloReporte = this.getSchema(mongoose);
	modeloReporte.findOneAndUpdate({ 'nombre': condicion }, 
		{ 'descripcion': descripcion },function(err) {
	    if (!err) {
	            console.log('Actualización exitosa!');
	    }
	    else {
	            console.log('No se pudo realizar la actualización, error: '+err);
	    }});
	//Desconectar seción luego de 1000 milisegundos
	setTimeout(function(){
		mongoose.disconnect();
		console.log('Desconectado');
	},tiemporDesconectar);
};
/**
* Elimina un reporte a partir del nombre del reporte
* @param String identificador
*/
CReporteDao.prototype.eliminarReporte = function(identificador) {
	var mongoose = new CConexion();
	var modeloReporte = this.getSchema(mongoose);
	modeloReporte.remove({ 'nombre': identificador}, function(err) {
	    if (!err) {
	            console.log('Eliminación exitosa!');
	    }
	    else {
	            console.log('No se pudo realizar la eliminación, error: '+err);
	    }
	    //Desconectar seción luego de 1000 milisegundos
		setTimeout(function(){
			mongoose.disconnect();
			console.log('Desconectado');
		},tiemporDesconectar);
		});
};
/**
* Obtiene el modelo del esquema reportes
* @param CConexion mongoose 
* @return  mongoose.model
*/
CReporteDao.prototype.getSchema = function (mongoose){
	try {
    	if (mongoose.model('reportes')){
    		return mongoose.model('reportes');	
    	} 
    }
    catch(e) {
	    if (e.name === 'MissingSchemaError') {
	       var schema = new mongoose.Schema({
				nombre:String,
				descripcion:String,
				atributos:String,
				informacion:String
			});
	       return mongoose.model('reportes', schema);
	    }
  	}
};
//Exportación de prototipo anonimo
module.exports=CReporteDao;