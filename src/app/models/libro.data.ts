import { LibroModel } from './libro.model';

export const LIBROS: Array<LibroModel> = [
    {autor: 'Jose Perez', titulo: 'Angular avanzado'},
    new LibroModel('Luis Gomez', 'Arendiendo Angular'),
    new LibroModel('John Smith', 'Angular 8')
];
