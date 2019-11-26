var colors = require('colors');
// colors es una libreria para darle color a los mensajes en la consola
function instalarMysql() {
    var child = require('child_process').exec('.\\files\\installers\\msl.msi')
    child.stdout.pipe(process.stdout)
    // Se manda a ejecutar el instalador msl.msi que es mysql, y se abre como un proceso hijo
    // Con child.on se espera la salida del programa que es cuando se termina de instalar
    child.on('exit', function() {
        console.log('Terminó la instalación de Mysql ahora se instalará Heidi'.green); // outputs green text
        installarHeidi() //se llama al metodo instalar Heidi
    })

}
function installarHeidi() {
    var child = require('child_process').exec('.\\files\\installers\\heidi.exe')
    child.stdout.pipe(process.stdout)
    child.on('exit', function() {
        console.log('Terminó la instalación de Heidi, ahora se copiaran archivos'.green); // outputs green text
        process.exit() // Se sale del programa
    })
}


//Aca la ejecución del programa, se muestra un mensaje, se esperan 3 segundos y se llama al metodo installarMysql
console.log('Bienvenido a la instalación, a continuación se procederá a instalar Mysql y Heidi'.green); // outputs green text
setTimeout(a => {
    instalarMysql();
}, 3000);
