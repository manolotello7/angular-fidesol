import { Injectable } from '@angular/core';
import { LIBROS } from '../models/libro.data';
import { LibroModel } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getMock(clave: string): Array<LibroModel> {
    if (clave) {
      return LIBROS;
    }
  }

  getMockAsinc(clave: string): Promise<Array<LibroModel>> {
    if (clave) {
      return new Promise( (resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.8) {
             resolve(LIBROS);
          } else {
            reject(new Error('Error en la simulación de conexiones'));
          }
        }, 1000);
      });
    }
  }


}
