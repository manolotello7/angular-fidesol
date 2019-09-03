/* export class TareaModel {
    nombre: string;
    isComplete: boolean;

    constructor(nombre = '', isComplete = false) {
        this.nombre = nombre;
        this.isComplete = isComplete;
    }
} */

export interface TareaInterface {
    nombre: string;
    isComplete: boolean;
}

export class TareaModel {
    constructor(
        public nombre = '',
        public isComplete = false) {}
}

