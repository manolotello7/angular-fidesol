import { Component, OnInit } from '@angular/core';
import { CursosIf, TurnosIf } from 'src/app/models/curso.model';
import { TURNOS, CURSOS } from 'src/app/models/curso.data';

@Component({
  selector: 'sol-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMDComponent implements OnInit {
  aCursos: Array<CursosIf>;
  aTurnos: Array<TurnosIf>;

  constructor() {
    this.aTurnos = TURNOS;
    this.aCursos = CURSOS;
   }

  ngOnInit() {
  }

}
