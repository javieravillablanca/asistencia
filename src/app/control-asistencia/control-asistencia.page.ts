
import { Component, OnInit } from '@angular/core';
import { MenuController,NavController  } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-control-asistencia',
  templateUrl: './control-asistencia.page.html',
  styleUrls: ['./control-asistencia.page.scss'],
})
export class ControlAsistenciaPage implements OnInit {

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
