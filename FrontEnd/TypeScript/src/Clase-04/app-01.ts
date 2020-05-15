export{};

class EscuelaDigital{
    //atributos
    nombre:string;
    cursos:string[]=[];

    //funciones que nos permite crear objetos
    constructor(nombre:string){
        this.nombre=nombre; // de atributo
    }

    agregarCurso(curso:string){
        this.cursos.push(curso); // de atributo

    }

}

const escuela =new EscuelaDigital('EDteam');
escuela.agregarCurso('java');
escuela.agregarCurso('ts');

console.log('escuela',escuela);
console.log('escuela.nombre',escuela.nombre);