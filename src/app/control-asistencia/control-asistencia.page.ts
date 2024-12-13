import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ModalPerfilPage } from '../modal-perfil/modal-perfil.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-control-asistencia',
  templateUrl: './control-asistencia.page.html',
  styleUrls: ['./control-asistencia.page.scss'],
})
export class ControlAsistenciaPage implements OnInit {
  usuario: any;
  user: any;
  asistencias: any[] = []; 

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    public modalController: ModalController
  ) { }

  openFirstMenu() {
    this.menuCtrl.open('first-menu');
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.menuCtrl.close(); // Cierra el menú cuando la navegación termina
    });

    // Monitorea el cambio del usuario
    this.loadUserData();
  }

  ionViewWillEnter() {
    this.loadUserData();
    this.loadAsistencias();
  }

  loadUserData() {
    // Carga los datos del usuario al entrar a la página
    const usuarioJSON = localStorage.getItem("usuario");
    if (usuarioJSON) {
      this.user = JSON.parse(usuarioJSON);
    }
    console.log("Usuario actual:", this.user);
  }

  loadAsistencias() {
    // Carga las asistencias desde localStorage cada vez que la vista entra
    let storedAsistencias = localStorage.getItem('asistencias');
    if (storedAsistencias) {
      this.asistencias = JSON.parse(storedAsistencias);
    } else {
      this.asistencias = [];
    }
    console.log("Asistencias actualizadas:", this.asistencias);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPerfilPage,
    });
    return await modal.present();
  }
}
