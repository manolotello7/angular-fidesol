import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoRefComponent } from './saludo-ref/saludo-ref.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [HomeComponent, SaludoComponent, SaludoRefComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    NgbModule,
    UtilsModule
  ]
})
export class HomeModule { }
