import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sol-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: string;
  textoHelper: string;
  fecha: Date;
  constructor() { }

  ngOnInit() {
    this.nombre = 'Pepe';
    this.textoHelper = 'Por favor, escribe tu nombre';
    this.fecha = new Date();

  }

  onClickBorrar(ev) {
    console.log(ev);
    this.nombre = '';
  }
}
