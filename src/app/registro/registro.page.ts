import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre = "";
  clave = "";
  correo = "";
  usuarios: any[] = [];
  mensajeError = ""; 
  constructor(private router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    if (localStorage.getItem("usuarios")) {
      this.usuarios = JSON.parse(localStorage.getItem("usuarios")!);
    }
  }

  validarCampos() {
    this.mensajeError = ""; 

    
    if (!this.nombre) {
      this.mensajeError = "El nombre es obligatorio.";
    } else if (this.nombre.length < 6) { 
      this.mensajeError = "El nombre debe tener al menos 6 caracteres.";
    } else if (this.nombre.length > 40) {
      this.mensajeError = "El nombre no puede tener más de 40 caracteres.";
    } else if (/\d/.test(this.nombre)) {
      this.mensajeError = "El nombre no puede contener números.";
    } else if (!this.correo) {
      this.mensajeError = "El correo es obligatorio.";
    } else if (!this.validarCorreo(this.correo)) {
      this.mensajeError = "El correo no es válido.";
    } else if (this.usuarios.some(usuario => usuario.correo === this.correo)) {
      this.mensajeError = "El correo ya está registrado.";
    } else if (!this.clave) {
      this.mensajeError = "La clave es obligatoria.";
    } else if (this.clave.length < 5) { 
      this.mensajeError = "La clave debe tener al menos 5 caracteres.";
    }
  }

  crearcuenta() {
    this.validarCampos(); 

    if (!this.mensajeError) {
      
      this.usuarios.push({ nombre: this.nombre, correo: this.correo, clave: this.clave });
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      this.router.navigate(['/login']);
    }

    if (this.mensajeError) {
      console.error(this.mensajeError);
    }
  }

  validarCorreo(correo: string): boolean {
    
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronCorreo.test(correo);
  }
}
