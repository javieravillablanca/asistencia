import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController,NavController, ToastController  } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';
import { ModalPerfilPage } from '../modal-perfil/modal-perfil.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-abrir-camara',
  templateUrl: './abrir-camara.page.html',
  styleUrls: ['./abrir-camara.page.scss'],
})
export class AbrirCamaraPage implements OnInit {
  usuario: any;
  user: any;
  

  asistencias: any[] = []; 

  isSupported = false;
  constructor(private menuCtrl: MenuController,
    private router: Router,
    private alertController: AlertController,
    private toast: ToastController,
    public modalController: ModalController
  ) { }
  openFirstMenu() {
    
      this.menuCtrl.open('first-menu');
  }


  ngOnInit() {

    
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
    this.router.events.pipe(
    
    filter((event) => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.menuCtrl.close(); // Cierra el menú cuando la navegación termina
  });
  const usuarioJSON = localStorage.getItem("usuario");
if (usuarioJSON) {
  this.user = JSON.parse(usuarioJSON);
}
}


async scan() {
  CapacitorBarcodeScanner.scanBarcode({ hint: CapacitorBarcodeScannerTypeHint.ALL })
  .then((data) => {
    let qr = data.ScanResult.split(" - - ");
    console.log(qr)
    console.log(this.usuario);

    
    let nuevaAsistencia = {
      ramo: qr[0],
      docente: qr[1],
      hora: new Date(),
      hora_inicio: qr[2],
      alumno: this.user.nombre
    };
    
    
    let storedAsistencias = localStorage.getItem('asistencias');
    let asistenciasGuardadas = storedAsistencias ? JSON.parse(storedAsistencias) : [];

   
    asistenciasGuardadas.push(nuevaAsistencia);
    
    
    localStorage.setItem('asistencias', JSON.stringify(asistenciasGuardadas));

    
    this.asistencias = asistenciasGuardadas;

    this.showToast(data.ScanResult);
  })
  .catch((err) => {
    console.error('Error scanning barcode:', err);
  });
}



async showToast(texto: string) {
  const toast = await this.toast.create({
    message: texto,
    duration: 3000,
    positionAnchor: 'footer2',
    cssClass: 'rounded-toast'
  });
  await toast.present();
}
async openModal() {
  const modal = await this.modalController.create({
    component: ModalPerfilPage,
  });
  return await modal.present();
}


}
