import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { InteresCompuestoComponent } from 'src/app/pages/interes-compuesto/interes-compuesto.component';
import { InteresSimpleComponent } from 'src/app/pages/interes_simple/interes/interes-simple.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GradienteComponent } from 'src/app/pages/gradiente/gradiente.component';
import { TasaInteresRetornoComponent } from 'src/app/pages/tasa-interes-retorno/tasa-interes-retorno.component';


@NgModule({
  declarations: [
    NavbarComponent,
    InteresSimpleComponent,
    InteresCompuestoComponent,
    GradienteComponent,
    TasaInteresRetornoComponent,


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    MenuRoutingModule
  ]
})
export class MenuModule { }
