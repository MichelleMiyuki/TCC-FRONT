import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import EndPoints from '../../helpers/endpoints';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nome: string;
  cpf: string;
  endereco: string;
  estado: string;
  telefone: string;
  email: string;
  senha: string;
  confirmarSenha: string;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}
  efetuarCadastro() {
    if (this.tudoPreenchido() &&
      this.senhaValida()
    ) {
      const objeto = {
        email: this.email,
        senha: this.senha,
        nome: this.nome,
        cpf: this.cpf,
        endereco: this.endereco,
        estado: this.estado,
        telefone: this.telefone
      };
      this.http.post(EndPoints.cadastro, objeto).subscribe((response: any) => {
        console.log(response);
        alert('Cadastrado com sucesso');
        this.router.navigate(['home']);
      }, (err) => {
        console.error(err);
        alert('Erro ao tentar inserer um usuario');
      });
    } else { console.error('cadastro inválido'); }
  }

  tudoPreenchido(): boolean {
    let valido = true;
    if (!this.nome || this.nome.length === 0) {
      alert('por favor preencher o campo de nome');
      valido = false;
    }
    if (!this.cpf || this.cpf.length === 0) {
      alert('por favor preencher o campo de cpf');
      valido = false;
    }
    if (!this.endereco || this.endereco.length === 0) {
      alert('por favor preencher o campo de endereco');
      valido = false;
    }
    if (!this.estado || this.estado.length === 0) {
      alert('por favor preencher o campo de estado');
      valido = false;
    }
    if (!this.telefone || this.telefone.length === 0) {
      alert('por favor preencher o campo de telefone');
      valido = false;
    }
    if (!this.email || this.email.length === 0) {
      alert('por favor preencher o campo de email');
      valido = false;
    }
    if (!this.senha || this.senha.length === 0) {
      alert('por favor preencher o campo de senha');
      valido = false;
    }
    if (!this.confirmarSenha || this.confirmarSenha.length === 0) {
      alert('por favor preencher o campo de confirmação de senha');
      valido = false;
    }
    return valido;
  }

  senhaValida(): boolean {
    let valido = true;
    if (this.senha.length < 4) {
      alert('A senha deve ter no mínimo 4 caracteres');
      valido = false;
    }
    if (this.senha !== this.confirmarSenha ) {
      alert('A senha e confirmação de senha não são iguais');
      valido = false;
    }
    return valido;
  }
}
