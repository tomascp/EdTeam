//tipos primitivos p basicos

//boolean

let estaConectado = true;
let estaInscrito: boolean;
estaInscrito = false;
estaInscrito = true;
// estaInscrito=2; no valido

function tieneDecuento(curso: string) {
    if (curso === 'ts')
        return true;
    else
        return false;
}
console.log("tieneDescuento('angula'):", tieneDecuento('angula'));

//number
let estudiantes = 100;
let contidadEstudiantes: number;
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
let hexdecimal: number = 0xf00d;
console.log('exadecimal', hexdecimal);


// string

let nombre = 'luis';
let apellido: string = 'castillo'
console.log(nombre + ' ' + apellido);
//string + ES6
let nombreCompleto = `${nombre}       ${apellido}`;  //tambien asigna espacio
console.log("nombre completo: ", nombreCompleto);


let arreglcurso = ['ts', 'anfular'];
let mensaje = `mi nombre es ${nombreCompleto} y tengo ${arreglcurso.length} cursos , gracias`;
console.log(mensaje);

//tipos de especiales

//Tipo : any

let desconocido;
desconocido: 'hola';
desconocido: 2;
let desconocido2: any = 2;

//tipo: void

let vacio: void;
function mostrarContenido(curso: string): void {
    const mensaje = curso ? `Bienvenido al curso ${curso}` : 'suscribite al curso';
    console.log('mensaje', mensaje);
}

console.log('ts', mostrarContenido('ts'));

//tipo: never
let nunca: never;
function retornaError(error: string): never {
    throw new Error('Error TS ' + error);
    //nunca retorna un errror
}

//retornaError('valor inesperado');

//tipo null y underfined

// Funciones en TypeScript
let nombre1: string = 'Edgar';

function saludo1(nombre: string): string {
    return 'Hola ' + nombre;
}
console.log(saludo1(nombre1));


//? opcional
function saludo2(nombre?: string): string {
    if (nombre)
        return 'Hola ' + nombre;

    return 'Hola';
}
console.log(saludo2(nombre1));
console.log(saludo2());

//arreglos y genericos

let cursos2: string[];
cursos2 = ['ts','angular'];

//arreglos genericos

let nombres: Array<string>;
nombres=['luis','marcos'];

let arreglo:any = ['juan',1,true,];


//tuplas

let infoCursos:[string,number] = ['ts',100];
infoCursos=['angula',200];

let curso: [string,number,string]=['ts',150,'12/12/2020'];
console.log('curso',curso);
console.log('infoCursos',infoCursos);

console.log('fecha de incio',curso[2]);
