import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockLibrosComponent } from './mock-libros/mock-libros.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LibrosComponent, MockLibrosComponent],
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
