var CReporte = require('./CReporte.js');
var CReporteDao = require('./CReporteDao.js');

//var a = new CReporte('Ian','1','2','3');
//console.log(a.nombre);
var b = new CReporteDao();
//b.mostrarReportes();
//b.agregarReporte(a);
var nombre = 'Ian';
var varNombre = 'nombre';
b.buscarReporte(varNombre,nombre);
