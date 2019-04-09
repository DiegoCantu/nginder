import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() titleComponente: string = "Iniciar Sesión";
  title: string;

  email: String = "";
  pass: String = "";

  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private router: Router) {
    window.history.replaceState({}, document.title, "/" + "");
  }

  action(action: string) {
    if (action == "Recuperar contraseña") {
      if (this.email != "") {
        if (this.email == localStorage.getItem("email")){
          this.pass = localStorage.getItem("pass");
        }else{
          alert("Email no se encuentra registrado");
        }
      }
    } else if (action == "Iniciar Sesión") {
      if (this.email != "" && this.pass != "") {
        if (this.email == localStorage.getItem("email")  && this.pass == localStorage.getItem("pass")){
          this.router.navigate(['./Home/' + this.pass]);
        } else{
          alert("Usuario y/o contraseña incorrectos");
        }
      }
    } else if (action == "Registro") {
      if (this.email != "" && this.pass != "") {
        localStorage.setItem('email', this.email.toString());
        localStorage.setItem('pass', this.pass.toString());
        this.router.navigate(['./Login']);
        this.email = localStorage.getItem("email");
        this.pass = localStorage.getItem("pass");
      }
    } else if (action == "Editar") {
      if (this.email != "" && this.pass != "") {
        localStorage.setItem('email', this.email.toString());
        localStorage.setItem('pass', this.pass.toString());
        this.router.navigate(['./Home/' + this.pass]);
        alert("Usuario editado correctamente");
      }
    }
  }

  ngOnInit() {
    this.title = this.titleComponente;

  }

}
