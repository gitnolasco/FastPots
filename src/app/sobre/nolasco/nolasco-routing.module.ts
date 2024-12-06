import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NolascoPage } from './nolasco.page';

const routes: Routes = [
  {
    path: '',
    component: NolascoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NolascoPageRoutingModule {}
