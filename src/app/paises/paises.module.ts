import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { FormsModule } from '@angular/forms';
import { InfoPaisComponent } from './info-pais/info-pais.component';


@NgModule({
  declarations: [ListaPaisesComponent, InfoPaisComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
