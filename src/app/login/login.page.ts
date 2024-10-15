import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, NavigationEnd } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { MenuController,NavController  } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  icono ="oscuro"
  usuario: string = ""
  clave: string = ""
  
  usuarios:any[] =[]
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private alert: AlertController,
    private menuCtrl: MenuController,
    private router: Router,
    private anim: AnimationController,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
    
  ) { }
  

  

  login() {
    for (let item of this.usuarios) {
      if (this.usuario === item.correo && this.clave === item.clave) {
        // Mostrar alerta de éxito
        this.alerta("Acceso Autorizado", "¡Datos correctos! Ingresando...", () => {
          let extras: NavigationExtras = { state: { usuario: this.usuario } };
          localStorage.setItem("usuario", JSON.stringify(item));
          this.router.navigate(['/home'], extras);
        });
        return;
      }
    }
  
    this.alerta("Acceso Denegado", "Datos incorrectos!", () => {});
  }


  async alerta(header: string, texto: string, handler: () => void) {
    let alerta = await this.alert.create({
      header: header, 
      message: texto,
      buttons: [
        { text: "Aceptar", handler: handler }
      ]
    });
    alerta.present();
  }

 
  


  cambiarTema(){
    if(this.icono == "claro"){
      document.documentElement.style.setProperty("--fondo1", "#ffff")
      document.documentElement.style.setProperty("--fondo-input", "#ffffff")
      document.documentElement.style.setProperty("--placeholder", "#939393")
      document.documentElement.style.setProperty("--boton1", "#821313")
      document.documentElement.style.setProperty("--fondoseclogin", "#ffffff7b")
      document.documentElement.style.setProperty("--colortext", "#1b1b1b")
      document.documentElement.style.setProperty("--logocredencial", "#f8f4f4")
      document.documentElement.style.setProperty("--colortitulo", "#900000")
      document.documentElement.style.setProperty("--colorlinea", "#a10707")
      document.documentElement.style.setProperty("--colorfooter", "#710202")
      // tema claro
      document.documentElement.style.setProperty("--table", "#fff")
      document.documentElement.style.setProperty("--inputs", "#fff")
      document.documentElement.style.setProperty("--table-container", "#fdfbfb")
      document.documentElement.style.setProperty("--contres", "#fff")
      document.documentElement.style.setProperty("--fondoimagen", "url(/assets/img/RegistrAppp2.png)")
      document.documentElement.style.setProperty("--separador", "#000")
      document.documentElement.style.setProperty("--fondosec", "#004d95")
      document.documentElement.style.setProperty("--th", "#ac0404")
      document.documentElement.style.setProperty("--conten2", "#a20707")
      document.documentElement.style.setProperty("--labels", "#000")
      document.documentElement.style.setProperty("--inputc", "#000")
      document.documentElement.style.setProperty("--colorfondotabla", "#a20707")
      document.documentElement.style.setProperty("--dayh6", "#333")
      document.documentElement.style.setProperty("--scechule", "#333")
      document.documentElement.style.setProperty("--colorlinea2", "#900000")
      document.documentElement.style.setProperty("--colorcuadrocam", "#910505")
      document.documentElement.style.setProperty("--lin", "#890303")
      document.documentElement.style.setProperty("--button2", "#67626291")
      document.documentElement.style.setProperty("--ion-item-color", "#000")
      document.documentElement.style.setProperty("--ion-toolbar-border-color", "#710202")
      document.documentElement.style.setProperty("--ion-border-color", "#710202")
      document.documentElement.style.setProperty("--ion-toolbar-background", "#710202")
      document.documentElement.style.setProperty("--ion-color-step-50", "#a10707")
      document.documentElement.style.setProperty("--ion-background-color-step-50", "#a10707")
      document.documentElement.style.setProperty("--background", "#a10707")
      document.documentElement.style.setProperty("--colorbarra", "#c3bdbd")
 
     

      this.icono = "oscuro"
    }else{
      document.documentElement.style.setProperty("--colorlinea2", "#fff")
      document.documentElement.style.setProperty("--scechule", "#fff")
      document.documentElement.style.setProperty("--dayh6", "#fff")
      document.documentElement.style.setProperty("--colorfondotabla", "#2e3239")
      document.documentElement.style.setProperty("--inputc", "#fff")
      document.documentElement.style.setProperty("--labels", "#fff")
      document.documentElement.style.setProperty("--conten2", "#2e3239")
      document.documentElement.style.setProperty("--th", "#2e3239")
      document.documentElement.style.setProperty("--fondosec", "#2e3239")
      document.documentElement.style.setProperty("--colorfooter", "#2e3239")
      document.documentElement.style.setProperty("--colorlinea", "#fff")
      document.documentElement.style.setProperty("--colortitulo", "#fff")
      document.documentElement.style.setProperty("--logocredencial", "#fff")
      document.documentElement.style.setProperty("--fondo1", "#1c1e21")
      document.documentElement.style.setProperty("--fondo-input", "#9e9999")
      document.documentElement.style.setProperty("--placeholder", "#ffffff")
      document.documentElement.style.setProperty("--boton1", "#000")
      document.documentElement.style.setProperty("--fondoseclogin", "#9c8c8c7b")
      document.documentElement.style.setProperty("--colortext", "#fff")
      document.documentElement.style.setProperty("--table", "#c1bcbc")
      document.documentElement.style.setProperty("--inputs", "#2e3239")
      document.documentElement.style.setProperty("--contres", "#fff")
      document.documentElement.style.setProperty("--table-container", "#000")
      document.documentElement.style.setProperty("--separador", "#fff")
      document.documentElement.style.setProperty("--fondoimagen", "url(/assets/img/fondooscuro.jpg)")
      document.documentElement.style.setProperty("--colorcuadrocam", "#2e3239")
      document.documentElement.style.setProperty("--lin", "#fff")
      document.documentElement.style.setProperty("--button2", "#34303091")
      document.documentElement.style.setProperty("--ion-item-color", "#fff")
      document.documentElement.style.setProperty("--ion-border-color", "#000")
      document.documentElement.style.setProperty("--ion-toolbar-background", "#000")
      document.documentElement.style.setProperty("--ion-color-step-50", "#000")
      document.documentElement.style.setProperty("--ion-background-color-step-50", "#000")
      document.documentElement.style.setProperty("--background", "#000")
      document.documentElement.style.setProperty("--colorbarra", "#c3bdbd")
     
      this.icono = "claro"
    }
  
  }
  
  ngOnInit() {this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.menuCtrl.close(); 
  });
  if(localStorage.getItem("usuarios")){
    this.usuarios = JSON.parse(localStorage.getItem("usuarios")!)
  }
}



  animarLogo() {
    const logo = document.querySelector('#tema');
    if (logo) {
      this.anim.create()
        .addElement(logo)
        .duration(2000)
        .iterations(Infinity) 
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.1)', opacity: '0.8' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ])
        .play();
    }
  }
  

  animarError(index:number){
    this.anim.create()
    .addElement(document.querySelectorAll("input")[index])
    .duration(100)
    .iterations(3)
    .keyframes([
      {offset: 0, transform: "translateX(0px)", border: "1px transparent solid"},
      {offset: 0.25, transform: "translateX(-5px)", border: "1px red solid"},
      {offset: 0.50, transform: "translateX(0px)", border: "1px transparent solid"},
      {offset: 0.75, transform: "translateX(5px)", border: "1px red solid"},
      {offset: 1, transform: "translateX(0px)", border: "1px #821313 solid"},
    ]).play()
  }



  async resetPass() {
    for (let u of this.usuarios) {
      if (u.correo == this.usuario) {
        const loading = await this.loadingCtrl.create({
          message: 'Cargando...',
        });
        loading.present()
        let nueva = Math.random().toString(36).slice(-6)
        u.clave = nueva
        let body = {
         "nombre": u.nombre,
          "app": "RegistrApp",
          "clave": nueva,
          "email": u.correo
        }
        this.http.post("https://myths.cl/api/reset_password.php", body)
        .subscribe((data)=>{
          console.log(data)
          loading.dismiss()
        })
        return
      }
    }
    console.log("Usuario no existe!.")
  }



}

