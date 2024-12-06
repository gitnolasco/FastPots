import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NolascoPageRoutingModule } from './nolasco-routing.module';

import { NolascoPage } from './nolasco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NolascoPageRoutingModule
  ],
  declarations: [NolascoPage]
})
export class NolascoPageModule {}
