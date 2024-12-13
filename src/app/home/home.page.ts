import { Component } from '@angular/core';
import { MenuController, AnimationController } from '@ionic/angular';
import { ModalPerfilPage } from '../modal-perfil/modal-perfil.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fecha: Date = new Date();
  icono = "oscuro";
  usuario: string = "";

  constructor(
    private menuCtrl: MenuController,   
    private animCtrl: AnimationController,
    public modalController: ModalController,
    private anim: AnimationController
  ) {}

  ngOnInit() {
    this.animarImagenes();
  }

  // Método para abrir el menú
  openFirstMenu() {
    this.menuCtrl.open('first-menu');
  }


  animarImagenes() {
    const imagenes = document.querySelectorAll('.imagenes img');
    imagenes.forEach((imagen) => {
      const animacion = this.animCtrl.create()
        .addElement(imagen)
        .iterations(Infinity)
        .duration(4000)  
        .keyframes([
          { offset: 0, transform: 'scale(1)' }, 
          { offset: 0.5, transform: 'scale(1.1)' }, 
          { offset: 1, transform: 'scale(1)' } 
        ]);

      animacion.play();
    });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPerfilPage,
    });
    return await modal.present();
  }
  animarLogo() { 
    const logo = document.querySelector('#logoopc');
    if (logo) {
        const animation = this.anim.create()
            .addElement(logo)
            .duration(2000)
            .iterations(Infinity) 
            .keyframes([
                { offset: 0, transform: 'scale(1) rotate(0deg)', opacity: '1' },
                { offset: 0.5, transform: 'scale(1.1) rotate(10deg)', opacity: '0.8' },
                { offset: 1, transform: 'scale(1) rotate(0deg)', opacity: '1' }
            ]);
        animation.play();
    } else {
        console.error('Logo not found');
    }
}
  
}
