import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'sol-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {
  mensaje: string;
  newTarea: TareaModel;
  @Output() addTarea: EventEmitter<TareaModel>;

  constructor() {
    this.addTarea = new EventEmitter();
  }

  ngOnInit() {
    this.mensaje = 'Describe la nueva tarea';
    this.newTarea = new TareaModel();
  }

  sendAddTarea() {
    if (this.newTarea.nombre) {
      this.addTarea.next(this.newTarea);
      this.newTarea = new TareaModel();
    }
  }

}
