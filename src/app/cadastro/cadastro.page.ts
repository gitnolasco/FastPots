import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  cadastroForm: FormGroup;
  mensagem: string = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    private toastController: ToastController
  ) {
    // Inicializando o FormGroup
    this.cadastroForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(10),
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit() {}

  // Método chamado ao enviar o formulário
  onSubmit() {
    if (this.cadastroForm.valid) {
      const { email, senha } = this.cadastroForm.value;
      this.authService.cadastroNoFirebase(email, senha)
        .then((res: any) => {
          // Após sucesso, redireciona para a página de login
          this.router.navigate(['/login']);
        })
        .catch((error: any) => {
          // Caso erro, exibe mensagem
          this.mensagem = 'Erro ao incluir usuário.';
          this.exibeMensagem();
        });
    } else {
      this.mensagem = 'Formulário inválido. Por favor, corrija os erros.';
      this.exibeMensagem();
    }
  }

  // Método para exibir a mensagem de erro
  async exibeMensagem() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000,
    });
    toast.present();
  }
}
