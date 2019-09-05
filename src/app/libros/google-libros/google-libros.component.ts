import { Component, OnInit } from '@angular/core';
import { LibroModel } from 'src/app/models/libro.model';
import { HttpClient } from '@angular/common/http';

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

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aLibros = []
  }

  buscar() {
    this.http.get('')
  }

}
