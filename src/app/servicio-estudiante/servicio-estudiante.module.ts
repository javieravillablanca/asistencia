import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioEstudiantePageRoutingModule } from './servicio-estudiante-routing.module';

import { ServicioEstudiantePage } from './servicio-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioEstudiantePageRoutingModule
  ],
  declarations: [ServicioEstudiantePage]
})
export class ServicioEstudiantePageModule {}
