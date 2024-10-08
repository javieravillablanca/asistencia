import { Component } from '@angular/core';
import { MenuController, AnimationController } from '@ionic/angular';

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
    private animCtrl: AnimationController  
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
}
