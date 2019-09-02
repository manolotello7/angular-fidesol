// Primitivos

let user: string;
let edad: number;
let isAlumno: boolean;
let algo: any;
let otro;

// Basados en genericos

let aDatos: number[];
let aNumbers: Array<number>;

// Inferencia de tipos
let x = 23; // x es de tipo number

// Clases e interfaces

interface Persona2 {
    nombre: string;
}

class Alumno2 implements Persona2 {
    nombre: string;
    curso: string;
}

let p10: Persona2;
let a10: Alumno2;

let a11 = new Alumno2();

p10 = {nombre: 'Pepe'};

// Tipo union

let id: number | string;

