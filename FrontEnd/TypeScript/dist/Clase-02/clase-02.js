"use strict";
//tipos primitivos p basicos
//boolean
var estaConectado = true;
var estaInscrito;
estaInscrito = false;
estaInscrito = true;
// estaInscrito=2; no valido
function tieneDecuento(curso) {
    if (curso === 'ts')
        return true;
    else
        return false;
}
console.log("tieneDescuento('angula'):", tieneDecuento('angula'));
//number
var estudiantes = 100;
var contidadEstudiantes;
contidadEstudiantes: 200;
/*
function getCantidadEstudiantes(curso3): any {
    if (curso3 === 'ts')
        return '100';
    else
        return '0';

}
*/
//console.log(getCantidadEstudiantes('tss'));
// Type exadecimal number
var hexdecimal = 0xf00d;
console.log('exadecimal', hexdecimal);
// string
var nombre = 'luis';
var apellido = 'castillo';
console.log(nombre + ' ' + apellido);
//string + ES6
var nombreCompleto = nombre + "       " + apellido; //tambien asigna espacio
console.log("nombre completo: ", nombreCompleto);
var arreglcurso = ['ts', 'anfular'];
var mensaje = "mi nombre es " + nombreCompleto + " y tengo " + arreglcurso.length + " cursos , gracias";
console.log(mensaje);
//tipos de especiales
//Tipo : any
var desconocido;
desconocido: 'hola';
desconocido: 2;
var desconocido2 = 2;
//tipo: void
var vacio;
function mostrarContenido(curso) {
    var mensaje = curso ? "Bienvenido al curso " + curso : 'suscribite al curso';
    console.log('mensaje', mensaje);
}
console.log('ts', mostrarContenido('ts'));
//tipo: never
var nunca;
function retornaError(error) {
    throw new Error('Error TS ' + error);
    //nunca retorna un errror
}
//retornaError('valor inesperado');
//tipo null y underfined
// Funciones en TypeScript
var nombre1 = 'Edgar';
function saludo1(nombre) {
    return 'Hola ' + nombre;
}
console.log(saludo1(nombre1));
//? opcional
function saludo2(nombre) {
    if (nombre)
        return 'Hola ' + nombre;
    return 'Hola';
}
console.log(saludo2(nombre1));
console.log(saludo2());
//arreglos y genericos
var cursos2;
cursos2 = ['ts', 'angular'];
//arreglos genericos
var nombres;
nombres = ['luis', 'marcos'];
var arreglo = ['juan', 1, true,];
//tuplas
var infoCursos = ['ts', 100];
infoCursos = ['angula', 200];
var curso = ['ts', 150, '12/12/2020'];
console.log('curso', curso);
console.log('infoCursos', infoCursos);
console.log('fecha de incio', curso[2]);
