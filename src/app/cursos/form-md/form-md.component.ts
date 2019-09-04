import { Component, OnInit } from '@angular/core';
import { CursosIf, TurnosIf, CursoModel } from 'src/app/models/curso.model';
import { TURNOS, CURSOS } from 'src/app/models/curso.data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sol-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMDComponent implements OnInit {
  aCursos: Array<CursosIf>;
  aTurnos: Array<TurnosIf>;
  formCurso: FormGroup;
  adatosCurso: CursoModel;

  constructor(public formBuilder: FormBuilder) {
    this.aTurnos = TURNOS;
    this.aCursos = CURSOS;
   }

  ngOnInit() {
    this.formCurso = this.formBuilder.group({
       nombre: ['', [Validators.required, Validators.minLength(2)]],
       apellidos: [''],
       dni: [],
       email: ['@fidesol.com', [Validators.required, Validators.email]],
       nacim: [],
       coment: [],
       isOk: ['', [Validators.required]],
       turno: ['', [Validators.required]],
       curso: ['', [Validators.required]]
    });
    console.log(this.formCurso);
  }

  onSubmit() {
    this.adatosCurso = this.formCurso.value;
    console.log(this.adatosCurso);
  }
}
