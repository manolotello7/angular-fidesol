import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sol-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css'],
  encapsulation: ViewEncapsulation.Emulated // valor por defecto
})
export class SaludoRefComponent implements OnInit {
  @ViewChild('refNombre', {static: true}) nombre: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.nombre);
  }

}
