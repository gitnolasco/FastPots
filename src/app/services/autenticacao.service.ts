import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa o AngularFireAuth
import { Router } from '@angular/router'; // Importa o Router para navegação após login/cadastro

@Injectable({
  providedIn: 'root', // Torna o serviço disponível em toda a aplicação
})
export class AutenticacaoService {
  constructor(
    private afAuth: AngularFireAuth, // Injeta o serviço de autenticação do Firebase
    private router: Router // Injeta o Router para redirecionamento
  ) {}

  // Método para cadastrar um novo usuário no Firebase
  cadastroNoFirebase(email: string, senha: string): Promise<any> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, senha)
      .then((credenciais) => {
        console.log('Usuário cadastrado com sucesso:', credenciais);
        return credenciais; // Retorna as credenciais do usuário
      })
      .catch((erro) => {
        console.error('Erro ao cadastrar usuário:', erro);
        throw erro; // Repassa o erro para quem chamou o método
      });
  }

  // Método para login no Firebase
  loginNoFirebase(email: string, senha: string): Promise<any> {
    return this.afAuth
      .signInWithEmailAndPassword(email, senha)
      .then((credenciais) => {
        console.log('Usuário logado com sucesso:', credenciais);
        localStorage.setItem('usuario', JSON.stringify(credenciais.user)); // Salva o usuário no localStorage
        return credenciais; // Retorna as credenciais do usuário
      })
      .catch((erro) => {
        console.error('Erro ao fazer login:', erro);
        throw erro; // Repassa o erro para quem chamou o método
      });
  }

  // Método para realizar logout no Firebase
  logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('usuario'); // Remove o usuário do localStorage
      sessionStorage.clear(); // Limpa toda a sessão
      console.log('Sessão limpa, usuário deslogado');
      this.router.navigate(['/login']); // Redireciona para a página de login
    });
  }

  // Método para limpar a sessão manualmente (se necessário)
  limparSessao() {
    localStorage.removeItem('usuario'); // Remove o item 'usuario' do localStorage
    sessionStorage.clear(); // Limpa toda a sessão
    console.log('Sessão limpa');
  }
}
