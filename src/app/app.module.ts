import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UtilsModule } from './utils/utils.module';
/* import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';
import { BlogModule } from './blog/blog.module'; */
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UtilsModule,
    NgbModule,
    CoreModule
    /* HomeModule,
    TareasModule,
    BlogModule */
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
