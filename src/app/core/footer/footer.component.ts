import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sol-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  fecha: Date;
  precio: number;
  constructor() { }

  ngOnInit() {
    this.fecha = new Date();

    this.precio = 20;
  }

}
