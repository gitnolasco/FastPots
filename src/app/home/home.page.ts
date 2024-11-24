import { Component } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';
   


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private autenticacaoService : AutenticacaoService,
    private router: Router
  ) {}

  // Método para realizar o logout
  logout() {
    this.autenticacaoService.limparSessao(); // Limpa a sessão
    this.router.navigate(['/login']); // Navega para a página de login
  }

  // Método para navegar até a página de introdução
  intro() {
    this.router.navigate(['/intro']); // Navega para a página de introdução
  }
}
