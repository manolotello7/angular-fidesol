import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'sol-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit {

  aTareas: Array<TareaModel>;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('tareas-plus')) {
      this.aTareas = JSON.parse(localStorage.getItem('tareas-plus'));
    } else {
      this.aTareas = [];
    }
  }

  addTarea(newTarea) {
    if (!newTarea.nombre) {
      return;
    }
    this.aTareas.push(newTarea);
    localStorage.setItem('tareas-plus', JSON.stringify(this.aTareas));
    console.log(this.aTareas);
  }

  changeTarea(tareaData) {
    this.aTareas.splice(tareaData.index, 1,  tareaData.tarea);
    localStorage.setItem('tareas-plus', JSON.stringify(this.aTareas));
  }

  deleteTarea(i) {
    this.aTareas.splice(i, 1);
    localStorage.setItem('tareas-plus', JSON.stringify(this.aTareas));
  }
}
