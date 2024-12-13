import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'control-asistencia',
    loadChildren: () => import('./control-asistencia/control-asistencia.module').then( m => m.ControlAsistenciaPageModule)
  },
  {
    path: 'abrir-camara',
    loadChildren: () => import('./abrir-camara/abrir-camara.module').then( m => m.AbrirCamaraPageModule)
  },
  {
    path: 'servicio-estudiante',
    loadChildren: () => import('./servicio-estudiante/servicio-estudiante.module').then( m => m.ServicioEstudiantePageModule)
  },
  {
    path: 'mi-horario',
    loadChildren: () => import('./mi-horario/mi-horario.module').then( m => m.MiHorarioPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'modal-perfil',
    loadChildren: () => import('./modal-perfil/modal-perfil.module').then( m => m.ModalPerfilPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


