//Clase de conexion con mongo DB
/**
*Constructor de la clase CConexion,
*Crea una conexion con la base de datos mongodb
*@return mongoose mongoose
*/
function CConexion(){
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/test');
	mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
	mongoose.connection.once('open', function callback () {
		console.log('Conexión exitosa.');
	});
	return mongoose;
};
//Exportación de prototipo anonimo
module.exports=CConexion;