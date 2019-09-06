import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IndexedLibroModel } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class MislibrosService {
  urlBase: string;
  constructor(public http: HttpClient) {
    this.urlBase = environment.urlMisLibros;
  }

  setLibro(libro: IndexedLibroModel): Observable<IndexedLibroModel>   {
    return this.http.post(this.urlBase, libro) as Observable<IndexedLibroModel>;
  }

  getLibros(): Observable<Array<IndexedLibroModel>> {
    return this.http.get(this.urlBase) as Observable<Array<IndexedLibroModel>>;
  }

  getLibro(id: string | number): Observable<IndexedLibroModel> {
    const url = this.urlBase + id;
    return this.http.get(url) as Observable<IndexedLibroModel>;
  }

  updateLibro(libro: any, id: string | number):
  Observable<IndexedLibroModel> {
    const url = this.urlBase + id;
    return this.http.patch(url, libro) as Observable<IndexedLibroModel>;
  }

  // tslint:disable-next-line: ban-types
  deleteLibro(id: string | number): Observable<Object> {
    const url = this.urlBase + id;
    return this.http.delete(url);
  }

}
