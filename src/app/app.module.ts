import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule,Routes } from '@angular/router';

const appRoutes:Routes = [

  {path: '', component: InicioComponent},
  {path: 'Conocimientos', component:ConocimientosComponent},
  {path: 'Proyectos', component:TrabajosComponent},
  {path: 'Contacto', component:ContactoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ConocimientosComponent,
    TrabajosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
