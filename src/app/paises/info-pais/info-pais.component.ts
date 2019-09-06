import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'sol-info-pais',
  templateUrl: './info-pais.component.html',
  styleUrls: ['./info-pais.component.css']
})
export class InfoPaisComponent implements OnInit {
  paisCode: string;
  paisCode$: Observable<Params>;
  // tslint:disable-next-line: ban-types
  pais: any;
  // tslint:disable-next-line: ban-types
  pais$: Observable<Object>;

  constructor(
    public paisesService: PaisesService,
    public activatedRoute: ActivatedRoute,
    public router: Router ) { }

  ngOnInit() {
    this.pais = {name: ''};
    /* this.paisCode$ = this.activatedRoute.params;
    this.paisCode$.subscribe(
      parametros => {
        this.paisCode = parametros.id;
        this.getPais();
    }); */
    this.paisCode = this.activatedRoute.snapshot.params.id;
    this.getPais();
  }

  getPais() {
    console.log(this.paisCode);
    /* this.pais$ = this.paisesService.getPaisInfo(this.paisCode);
    this.pais$.subscribe( response => {
      this.pais = response;
    }); */
    this.paisesService.getPaisInfo(this.paisCode)
    .subscribe( response => {
      this.pais = response;
    });
}

  goBack() {
    this.router.navigateByUrl('/paises');
  }
}
