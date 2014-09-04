var a = require('./reporteDao.js');

//Open a connection to the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var reporteSchema =  mongoose.Schema({
		nombre:String,
		descripcion:String,
		atributos:String,
		informacion:String
	});


var Reporte = mongoose.model('reportes',reporteSchema);

//get notified if we connect succesfully or if a connection error occurs
var dd = mongoose.connection;
var rep = a.agregarReporte('Ryan','1','2','3');
var cReporte = new Reporte({nombre:rep.nombre});
cReporte.save(function (err, cReporte) {
  if (err) return console.error(err);
  console.log('ok');
});

console.log(rep.nombre);
console.log(cReporte.nombre);


dd.on('error', console.error.bind(console,'connection error:'));
dd.once('open', function callback (){
	console.log('Hola mundo :D');
	dd.db.collectionNames(function (err, names) {
        console.log("in the result st")
        console.log(err);
        console.log(names);
    })
});



/*
function conexion (){
	//conexion con mongo DB
}

//mostrar las colecciones de esquemas (estructura de documentos)
function obtenerEsquemas(){
	//show collections
}

function obtenerRegistro(atributos, tabla, criterio, orden){
	//select
}
*/
function insertarRegistro(registro){
	//insert
	
}
/*
function actualizarRegistro(atributos, tabla, criterio){
	//update
}

function eliminarRegistro(tabla, criterio){
	//delete
}*/
