export {}; //modulo en ts

//alias para tipo de datos

let curso: string = 'TS';
//curso de codigo: js=1, ts= 2
let cursoNuevo: string | number;

cursoNuevo = 'JS';
cursoNuevo = 2;

function getCurso():string | number | boolean{ 
    return 'JS';
    return 1;
}

//arreglos

let cursos: string[] = ['js','ts'];
let cursos2: (string|number)[]=['js',2];

console.log('cursos',cursos);
console.log('cursos2',cursos2);

