import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'sol-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  newTarea: TareaModel;
  aTareas: Array<TareaModel>;
  mensaje: string;

  constructor() { }

  ngOnInit() {
    this.mensaje = 'Describe la tarea';
    this.newTarea = new TareaModel();
    if (localStorage.getItem('tareas')) {
      this.aTareas = JSON.parse(localStorage.getItem('tareas'));
    } else {
      this.aTareas = [];
    }
  }

  addTarea() {
    if (!this.newTarea.nombre) {
      return;
    }
    this.aTareas.push(this.newTarea);
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
    this.newTarea = new TareaModel();
    console.log(this.aTareas);
  }

  onChangeCheck() {
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
  }

  onClickBorrar(i) {
    this.aTareas.splice(i, 1);
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
  }
}
