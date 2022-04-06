import { AutenticacoService } from './../../autenticacao/autenticaco.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(private authSevice: AutenticacoService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
      this.authSevice.autenticar(this.usuario, this.senha).subscribe(res => {
        console.log(res);
        this.router.navigate(['animais'])
      }, (error) => {
        error
      })

  }

}
