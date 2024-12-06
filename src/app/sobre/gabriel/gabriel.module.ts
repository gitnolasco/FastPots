import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GabrielPageRoutingModule } from './gabriel-routing.module';

import { GabrielPage } from './gabriel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GabrielPageRoutingModule
  ],
  declarations: [GabrielPage]
})
export class GabrielPageModule {}
