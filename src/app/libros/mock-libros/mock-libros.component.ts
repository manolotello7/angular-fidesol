import { Component, OnInit } from '@angular/core';
import { LibroModel } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'sol-mock-libros',
  templateUrl: './mock-libros.component.html',
  styleUrls: ['./mock-libros.component.css']
})
export class MockLibrosComponent implements OnInit {
  clave: string;
  busqueda: string;
  error: string;
  aLibros: Array<LibroModel>;

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  onChange() {
    this.busqueda = this.clave;
    this.error  = '';
    this.aLibros = [];
    console.log('Buscando');
    // this.aLibros = this.librosService.getMock(this.clave);
    this.librosService.getMockAsinc(this.clave)
    .then( (datos: Array<LibroModel>) => this.aLibros = datos)
    .catch( (error: Error) => this.error = error.message);
    this.clave = '';
  }

  // Basado en ES2017

  async onChangeAsinc() {
    this.busqueda = this.clave;
    this.error  = '';
    this.aLibros = [];
    console.log('Buscando');
    // this.aLibros = this.librosService.getMock(this.clave);
    try {
      this.aLibros = await this.librosService.getMockAsinc(this.clave) as Array<LibroModel>;
    } catch (error) {
      this.error = error.message;
    }
    this.clave = '';
  }
}
