import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import EndPoints from '../../helpers/endpoints';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  usuario: string;
  senha: string;

  constructor(private router: Router, private http: HttpClient) {}

  efetuarLogin() {
    this.http.post(EndPoints.login, {
      email: this.usuario,
      senha: this.senha
    }).subscribe((resposta: any) => {
      if (resposta) {
        this.router.navigate(['dashboard']);
      } else { alert('Usuário ou senha inválido'); }
    }, (err: any) => {
      alert(err.error.mensagem);
    });
  }
}
