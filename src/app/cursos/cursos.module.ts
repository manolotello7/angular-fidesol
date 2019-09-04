import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { FormTDComponent } from './form-td/form-td.component';
import { FormMDComponent } from './form-md/form-md.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CursosComponent, FormTDComponent, FormMDComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
