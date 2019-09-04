interface AlumnoIf {
    nombre: string;
    apellidos: string;
    dni: string;
    email: string;
    nacim: Date;
    coment: string;
}

export interface TurnosIf {
    id: string;
    nombre: string;
    descripcion: string;
}

export interface CursosIf {
    id: string;
    nombre: string;
    descripcion: string;
}

export class CursoModel implements AlumnoIf {
    constructor(
        public nombre: string =  '',
        public apellidos: string =  '',
        public dni: string =  '',
        public email: string =  '',
        public nacim: Date = new Date(),
        public coment: string =  '',
        public isOk: boolean = false,
        public turno: TurnosIf = null,
        public curso: CursosIf = null
    ) {}
}
