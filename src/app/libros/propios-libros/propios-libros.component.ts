import { Component, OnInit } from '@angular/core';
import { IndexedLibroModel } from 'src/app/models/libro.model';
import { MislibrosService } from 'src/app/services/mislibros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sol-propios-libros',
  templateUrl: './propios-libros.component.html',
  styleUrls: ['./propios-libros.component.css']
})
export class PropiosLibrosComponent implements OnInit {
  aLibros: Array<IndexedLibroModel>;
  aLibros$: Observable<Array<IndexedLibroModel>>;
  libro: IndexedLibroModel;

  constructor(public librosService: MislibrosService) { }

  ngOnInit() {
    this.libro = new IndexedLibroModel();
    this.aLibros = [];
    this.readLibros();
  }

  readLibros() {
    this.aLibros$ = this.librosService.getLibros();
    this.aLibros$.subscribe(
      response => this.aLibros = response
    );
  }

  addLibro() {
    if (this.libro.titulo) {
      this.librosService.setLibro(this.libro)
      .subscribe(response => {
        console.log(response);
        this.readLibros();
      });
    }
  }



  editarLibro(ev: any) {
    const elementTitulo = ev.target.previousElementSibling;
    const elementAutor = elementTitulo.previousElementSibling;
    console.dir(elementTitulo);
    console.dir(elementAutor);
    elementTitulo.setAttribute('contenteditable', true);
    elementAutor.setAttribute('contenteditable', true);
  }

  grabarAutor(ev: any, id: number | string) {
    console.log(ev.target.textContent);
    ev.target.removeAttribute('contenteditable');
    ev.target.nextElementSibling.removeAttribute('contenteditable');
    this.librosService.updateLibro({ autor: ev.target.textContent }, id)
    .subscribe(response => {
      console.log(response);
      // this.readLibros();
    });
  }

  grabarTitulo(ev: any, id: number | string) {
    ev.target.removeAttribute('contenteditable');
    ev.target.previousElementSibling.removeAttribute('contenteditable');
    this.librosService.updateLibro({ titulo: ev.target.textContent }, id)
    .subscribe(response => {
      console.log(response);
      // this.readLibros();
    });
  }



  borrarLibro(id) {
    this.librosService.deleteLibro(id)
    .subscribe(response => {
      console.log(response);
      this.readLibros();
    });
  }
}
