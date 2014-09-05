var CReporte = require('./CReporte.js');
var CReporteDao = require('./CReporteDao.js');
var reportDao = new CReporteDao();
//Constructor de la clase
function CLogica(){
}
/**
* Agrega un reporte
* @param String nombre
* @param String descripcion
*/
CLogica.prototype.agregarReporte=function(nombre,descripcion){
	var atributos = '2';
	var informacion = '22';
	var report = new CReporte(nombre,atributos,atributos,informacion);
	reportDao.agregarReporte(report);	
};
/**
* Solicita mostrar todos los reportes
*/
CLogica.prototype.mostrarReportes = function() {
	reportDao.mostrarReportes();
};
/*
*Busca un reporte en especifico a partir de una variable
* @param String varNombre
* @param String nombre
*/
CLogica.prototype.buscarReporte = function(varNombre,nombre) {
	reportDao.buscarReporte(varNombre,nombre);
};
/**
* Edita la descripción de un reporte
* @param String nombre
* @param String descripcion
*/
CLogica.prototype.editarReporte = function(nombre,descripcion) {
	reportDao.editarReporte(nombre,descripcion);
};
/**
* Elimina un reporte a partir del nombre del reporte
* @param String identificador
*/
CLogica.prototype.eliminarReporte = function(identificador) {
	reportDao.eliminarReporte(identificador);
};
//Exportación de prototipo anonimo
module.exports=CLogica;

//Ejecutar logica nodejs
/*
var CLogica= require ('./CLogica.js');
var test=new CLogica();
test.mostrarReportes();
test.agregarReporte('Gia','Solicitud');
test.agregarReporte('Alex','Solicitud');
test.mostrarReportes();
test.buscarReporte('nombre','Gia');
test.eliminarReporte('Gia');
test.mostrarReportes();
test.editarReporte('Gia','Nueva descripcion');
test.mostrarReportes();
*/