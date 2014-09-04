//Clase CReporte
/**
* Constructor de la clase
* @param String nombre
* @param String Descripcion
* @param Array atributos 
* @param Array informacion
*/
function CReporte (nombre,descripcion,atributos,informacion){
	this.nombre=nombre;
	this.descripcion = descripcion;
	this.atributos= atributos;
	this.informacion= informacion;
}

//Funciones o parametros a exportar.
module.exports=CReporte;

