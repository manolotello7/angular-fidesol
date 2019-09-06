import { Injectable } from '@angular/core';
import { LIBROS } from '../models/libro.data';
import { LibroModel } from '../models/libro.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(public http: HttpClient) { }

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

  get(clave: string): Promise<Array<LibroModel>> {
    const url = environment.urlLibros + clave;
    return this.http.get(url).toPromise()
    .then( response => Promise.resolve(this.procesar(response)));
  }

  getRx(clave: string): Observable<Array<LibroModel>> {
    const url = environment.urlLibros + clave;
    console.log(url);
    return this.http.get(url)
    .pipe( map( item => this.procesar(item)));
  }

  procesar(response) {
    response = response.items.map( item => item.volumeInfo);
    response = response.map(item => {
      const autorString = item.authors ? item.authors.toString() : 's/a';
      return {autor: autorString, titulo: item.title};
    });
    return response;
  }
}
