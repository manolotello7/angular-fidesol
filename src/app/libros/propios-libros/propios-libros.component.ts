import { Component, OnInit } from '@angular/core';
import { LibroModel } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'sol-propios-libros',
  templateUrl: './propios-libros.component.html',
  styleUrls: ['./propios-libros.component.css']
})
export class PropiosLibrosComponent implements OnInit {
  aLibros: Array<LibroModel>;
  libro: LibroModel;

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
    this.libro = new LibroModel();
    this.aLibros = [];
  }

  addLibro() {
    if (this.libro.titulo) {
      this.librosService.setMisLibros(this.libro)
      .subscribe(response => console.log(response));
    }

  }

  editarLibro() {}

  borrarLibro() {}
}
