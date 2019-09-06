import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { InfoPaisComponent } from './info-pais/info-pais.component';


const routes: Routes = [
  { path: '', component: ListaPaisesComponent },
  { path: ':id', component: InfoPaisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
