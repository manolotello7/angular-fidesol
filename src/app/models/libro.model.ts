export class LibroModel {
    constructor(
        public autor: string = '',
        public titulo: string = ''
    ) {}
}

export class IndexedLibroModel {
    constructor(
        public id: string | number = 0,
        public autor: string = '',
        public titulo: string = ''
    ) {}
}