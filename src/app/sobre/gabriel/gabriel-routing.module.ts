import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GabrielPage } from './gabriel.page';

const routes: Routes = [
  {
    path: '',
    component: GabrielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GabrielPageRoutingModule {}
