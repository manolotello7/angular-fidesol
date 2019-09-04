import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'sol-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  newTarea: TareaModel;
  aTareas: Array<TareaModel>;
  mensaje: string;

  constructor(public storage: StorageService) { }

  ngOnInit() {
    this.mensaje = 'Describe la tarea';
    this.newTarea = new TareaModel();
    this.storage.setClave('tareas')
    if (this.storage.getJson()) {
      this.aTareas = this.storage.getJson();
    } else {
      this.aTareas = [];
    }
  }

  addTarea() {
    if (!this.newTarea.nombre) {
      return;
    }
    this.aTareas.push(this.newTarea);
    this.storage.setJson(this.aTareas);
    this.newTarea = new TareaModel();
    console.log(this.aTareas);
  }

  onChangeCheck() {
    this.storage.setJson(this.aTareas);
  }

  onClickBorrar(i) {
    this.aTareas.splice(i, 1);
    this.storage.setJson(this.aTareas);
  }
}
