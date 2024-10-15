import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  nombre=""
  clave=""
  correo=""
  usuario=""
  usuarios:any[] =[]
  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("usuarios")){
      this.usuarios = JSON.parse(localStorage.getItem("usuarios")!)
    }
  }

  crearcuenta(){

    this.usuarios.push({nombre: this.nombre, correo:this.correo, clave: this.clave})
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios))
    this.router.navigate(['/login']);

  }

}