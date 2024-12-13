
import { Component, OnInit } from '@angular/core';
import { MenuController,NavController  } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ModalPerfilPage } from '../modal-perfil/modal-perfil.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mi-horario',
  templateUrl: './mi-horario.page.html',
  styleUrls: ['./mi-horario.page.scss'],
})
export class MiHorarioPage implements OnInit {

  constructor(private menuCtrl: MenuController,
    private router: Router,
    public modalController: ModalController
  ) { }
  openFirstMenu() {
    
      this.menuCtrl.open('first-menu');
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPerfilPage,
    });
    return await modal.present();
  }

  ngOnInit() {this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.menuCtrl.close(); // Cierra el menú cuando la navegación termina
  });
}


}
