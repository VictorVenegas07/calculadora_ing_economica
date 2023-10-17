import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { InteresSimpleComponent } from 'src/app/pages/interes_simple/interes/interes-simple.component';
import { InteresCompuestoComponent } from 'src/app/pages/interes-compuesto/interes-compuesto.component';
import { GradienteComponent } from 'src/app/pages/gradiente/gradiente.component';
import { TasaInteresRetornoComponent } from 'src/app/pages/tasa-interes-retorno/tasa-interes-retorno.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'InteresSimple/:id', component:  InteresSimpleComponent},
      { path: 'InteresCompuesto', component:  InteresCompuestoComponent},
      { path: 'Gradiente', component:  GradienteComponent},
      { path: 'tasa interes retorno', component: TasaInteresRetornoComponent },
      { path: '**', redirectTo: 'Gradiente' },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
