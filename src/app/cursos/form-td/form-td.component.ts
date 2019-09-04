import { Component, OnInit, ViewChild } from '@angular/core';
import { CursosIf, TurnosIf, CursoModel } from 'src/app/models/curso.model';
import { CURSOS, TURNOS } from '../../models/curso.data'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'sol-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTDComponent implements OnInit {
  aCursos: Array<CursosIf>;
  aTurnos: Array<TurnosIf>;
  datosCurso: CursoModel;
  @ViewChild('formCurso', {static: true}) formCurso: NgForm;

  constructor() { }

  ngOnInit() {
    this.aCursos = CURSOS;
    this.aTurnos = TURNOS;
    this.datosCurso = new CursoModel();
    console.log(this.formCurso);
  }

  onSubmit() {
    console.log(this.datosCurso);
  }
}
