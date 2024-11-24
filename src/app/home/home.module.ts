import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';
import { AutenticacaoService } from "../services/autenticacao.service"; // Importando o serviço

@NgModule({
  declarations: [HomePage], // Declarando o componente
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
  ],
  providers: [AutenticacaoService], // Registrando o serviço
})
export class HomePageModule {}
