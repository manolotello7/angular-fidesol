import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { HomeComponent } from './home/home.component';
import { TareasComponent } from './tareas/tareas.component';
import { BlogComponent } from './blog/blog.component'; */

const routes: Routes = [
  /* { path: 'home', component: HomeComponent }, */
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  /* { path: 'tareas', component: TareasComponent }, */
  {
    path: 'tareas',
    loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule)
  },
  /* { path: 'blog', component: BlogComponent }, */
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
