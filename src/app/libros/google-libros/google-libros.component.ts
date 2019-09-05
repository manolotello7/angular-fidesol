import { Component, OnInit } from '@angular/core';
import { LibroModel } from 'src/app/models/libro.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'sol-google-libros',
  templateUrl: './google-libros.component.html',
  styleUrls: ['./google-libros.component.css']
})
export class GoogleLibrosComponent implements OnInit {

  clave: string;
  busqueda: string;
  error: string;
  aLibros: Array<LibroModel>;

  constructor(public http: HttpClient,
              public librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {

    if (this.clave) {
      this.busqueda = this.clave;
      const url = environment.urlLibros + this.clave;
      this.clave = '';
      this.http.get(url).toPromise()
      .then( response => this.procesar(response));
    }
  }

  procesar(response) {
    this.aLibros = [];
    response = response.items.map( item => item.volumeInfo);
    response = response.map(item => {
      const autorString = item.authors ? item.authors.toString() : 's/a';
      return {autor: autorString, titulo: item.title};
    });
    this.aLibros = response;
  }

  buscarBySrv() {
    if (this.clave) {
      this.busqueda = this.clave;
      this.librosService.get(this.clave)
      .then(response => this.aLibros = response);
      this.clave = '';
    }
  }

  async buscarBySrv2() {
    if (this.clave) {
      this.busqueda = this.clave;
      this.aLibros = await this.librosService.get(this.clave);
      this.clave = '';
    }
  }

  buscarBySrvRx() {
    if (this.clave) {
      this.busqueda = this.clave;
      this.librosService.getRx(this.clave)
      .subscribe( response => this.aLibros = response);
      this.clave = '';
    }
  }
}
