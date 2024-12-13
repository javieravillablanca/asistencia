import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.page.html',
  styleUrls: ['./modal-perfil.page.scss'],
})
export class ModalPerfilPage implements OnInit{
  usuario: any;
  constructor(public modalController: ModalController,
    
  ) {}

  
  dismiss() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    
    const usuarioJSON = localStorage.getItem("usuario");
    if (usuarioJSON) {
      this.usuario = JSON.parse(usuarioJSON);
    }
  }
}
