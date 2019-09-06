import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'sol-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {
  aContinentes: Array<{code: string, nombre: string}>;
  selContinent: {code: string, nombre: string};
  aPaises: Array<{name: string, alpha3Code: string}>;

  constructor(public paisesService: PaisesService) { }

  ngOnInit() {
    this.aContinentes = [
      {code: 'Africa', nombre: 'Africa'}, {code: 'Americas', nombre: 'America'},
      {code: 'Asia', nombre: 'Asia'}, {code: 'Europe', nombre: 'Europa'},
      {code: 'Oceania', nombre: 'Oceania'},
    ];
  }

  onChangeContinent() {
    this.paisesService.getPaises(this.selContinent.code)
    .subscribe(
      (response: Array<{name: string, alpha3Code: string}> ) => {
        this.aPaises = response;
        console.log(this.aPaises);
    });
  }

}
