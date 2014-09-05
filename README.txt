Reporteador
===========
Primero deben instalarse Node.js (http://nodejs.org/download/).
Instalar mongodb (http://www.mongodb.org/downloads).

La versión 1.2 unicamente tiene el modelo logico del sistema, 
las funcionalidades que este posee son agregacion, lectura, eliminación y actualización de reportes.

Existen 4 modulos:
  *CReporte: Contiene el constructor de Reporte
  *CConexion: Contiene la conexion a la base de datos test
  *CReporteDao: Contiene todas las operaciones que se pueden realizar a un reporte, 
                este interactua directamente con los registros en la base de datos.
  *CLogica: Contiene referencias a las operaciones de CReporteDao, su objetivo es validar los datos de entrada y retornar
            una salida.

Ejemplo. Estos comandos son ejecutados desde la terminal de linux, primero se ejecuta nodejs y luego los 
siguientes comandos:

//Ejecutar logica nodejs
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
