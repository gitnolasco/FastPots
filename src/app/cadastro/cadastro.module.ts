import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importando o ReactiveFormsModule
import { IonicModule } from '@ionic/angular';
import { CadastroPageRoutingModule } from './cadastro-routing.module';
import { CadastroPage } from './cadastro.page'; // Importando o CadastroPage

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CadastroPageRoutingModule,
    ReactiveFormsModule, // Adicionando ReactiveFormsModule para trabalhar com formulários reativos
  ],
  declarations: [CadastroPage], // Declarando o CadastroPage
})
export class CadastroPageModule {}
