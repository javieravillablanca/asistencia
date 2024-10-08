import { Component, OnInit } from '@angular/core';
import { MenuController,NavController  } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-servicio-estudiante',
  templateUrl: './servicio-estudiante.page.html',
  styleUrls: ['./servicio-estudiante.page.scss'],
})
export class ServicioEstudiantePage implements OnInit {

  constructor(private menuCtrl: MenuController,
    private router: Router
  ) { }
  openFirstMenu() {
    
      this.menuCtrl.open('first-menu');
  }


  ngOnInit() {this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.menuCtrl.close(); // Cierra el menú cuando la navegación termina
  });
}
}
