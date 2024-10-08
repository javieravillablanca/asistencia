import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioEstudiantePage } from './servicio-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioEstudiantePageRoutingModule {}
