import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockLibrosComponent } from './mock-libros/mock-libros.component';
import { FormsModule } from '@angular/forms';
import { GoogleLibrosComponent } from './google-libros/google-libros.component';
import { PropiosLibrosComponent } from './propios-libros/propios-libros.component';


@NgModule({
  declarations: [LibrosComponent, MockLibrosComponent, GoogleLibrosComponent, PropiosLibrosComponent],
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
