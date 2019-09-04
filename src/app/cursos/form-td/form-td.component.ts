import { Component, OnInit } from '@angular/core';
import { CursosIf, TurnosIf } from 'src/app/models/curso.model';
import { CURSOS, TURNOS } from '../../models/curso.data'

@Component({
  selector: 'sol-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTDComponent implements OnInit {
  aCursos: Array<CursosIf>;
  aTurnos: Array<TurnosIf>;

  constructor() { }

  ngOnInit() {
    this.aCursos = CURSOS;
    this.aTurnos = TURNOS;
  }

}
