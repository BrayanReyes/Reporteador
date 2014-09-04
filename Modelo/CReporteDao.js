var CConexion = require('./CConexion.js');
var tiemporDesconectar = 1000;
function CReporteDao(){

}
//The prototype Property allows us to create methods and atributes to main class
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
	},tiemporDesconectar)
};

//BSON de Reporte
CReporteDao.prototype.getSchema = function (mongoose){
	//Definir el Schema para Reportes
	var reporteSchema =  mongoose.Schema({
		nombre:String,
		descripcion:String,
		atributos:String,
		informacion:String
	});
	//Compilamos el Schema en un modelo y retornamos el modelo
	return mongoose.model('reportes',reporteSchema)
};

//Mostrar Registros
CReporteDao.prototype.mostrarReportes = function (){
	var mongoose = new CConexion();
	var modeloReporte = this.getSchema(mongoose);
	modeloReporte.find(function (err, modeloReporte) {
		if (err) return console.error(err);
		console.log(modeloReporte)
	})
	//Desconectar seción luego de 1000 milisegundos
	setTimeout(function(){
		mongoose.disconnect();	
	},tiemporDesconectar)

};
CReporteDao.prototype.buscarReporte = function (atributo,datoAtributo){
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
	},tiemporDesconectar)

};

//Exportar
module.exports=CReporteDao;


/*
function editarReporte(){	

}

function eliminarReporte(){

}

function obtenerAtributos(tabla, conexion){
	var atributos = tabla+conexion;//selec atributos
	return prompt('Digite los atributos que desea reportar, seguidos por una ","');
}

function obtenerTabla(){
	
}

function consultarInformacion(tabla, atributos){

}
*/
