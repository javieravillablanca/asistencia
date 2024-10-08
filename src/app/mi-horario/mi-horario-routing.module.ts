import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiHorarioPage } from './mi-horario.page';

const routes: Routes = [
  {
    path: '',
    component: MiHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiHorarioPageRoutingModule {}
