import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController,NavController  } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-abrir-camara',
  templateUrl: './abrir-camara.page.html',
  styleUrls: ['./abrir-camara.page.scss'],
})
export class AbrirCamaraPage implements OnInit {

  isSupported = false;
  constructor(private menuCtrl: MenuController,
    private router: Router,
    private alertController: AlertController
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
}

async scan(): Promise<void> {
  const granted = await this.requestPermissions();
  if (!granted) {
    this.presentAlert("Sin permisos para acceder!.");
    return;
  }
  const { barcodes } = await BarcodeScanner.scan();
  this.presentAlert(barcodes[0].rawValue)
}

async requestPermissions(): Promise<boolean> {
  const { camera } = await BarcodeScanner.requestPermissions();
  return camera === 'granted' || camera === 'limited';
}
async presentAlert(texto:string): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Permission denied',
    message: texto,
    buttons: ['OK'],
  });
  await alert.present();
}
}
