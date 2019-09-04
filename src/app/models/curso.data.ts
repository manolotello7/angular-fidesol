import { CursosIf, TurnosIf } from './curso.model';

export const CURSOS: Array<CursosIf> = [
    { id: 'A', nombre: 'Angular', descripcion: 'Aprendiendo Angular...'},
    { id: 'R', nombre: 'React', descripcion: 'Aprendiendo React...'},
    { id: 'V', nombre: 'Vue', descripcion: 'Aprendiendo Vue..'}
];

export const TURNOS: Array<TurnosIf> = [
    { id: 'M', nombre: 'Mañana', descripcion: '9:00 - 14:00'},
    { id: 'T', nombre: 'Tarde', descripcion: '16:00 - 20:00'},
    { id: 'N', nombre: 'Noche', descripcion: '19:00 - 21:00'}
];
