import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'sol-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: TareaModel;
  @Input() i: number;
  @Output() changeTarea: EventEmitter<any>;
  @Output() deleteTarea: EventEmitter<number>;
  constructor() {
    this.changeTarea = new EventEmitter();
    this.deleteTarea = new EventEmitter();
  }

  ngOnInit() {
  }

  sendChangeCheck() {
    this.changeTarea.next({tarea: this.tarea, index: this.i});
  }

  sendClickBorrar() {
    this.deleteTarea.next(this.i);
  }
}
