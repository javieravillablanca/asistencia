import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiHorarioPageRoutingModule } from './mi-horario-routing.module';

import { MiHorarioPage } from './mi-horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiHorarioPageRoutingModule
  ],
  declarations: [MiHorarioPage]
})
export class MiHorarioPageModule {}
