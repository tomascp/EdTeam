"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EscuelaDigital = /** @class */ (function () {
    //funciones que nos permite crear objetos
    function EscuelaDigital(nombre) {
        this.cursos = [];
        this.nombre = nombre; // de atributo
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso); // de atributo
    };
    return EscuelaDigital;
}());
var escuela = new EscuelaDigital('EDteam');
escuela.agregarCurso('java');
escuela.agregarCurso('ts');
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
