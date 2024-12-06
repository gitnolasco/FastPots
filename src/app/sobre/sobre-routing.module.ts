import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobrePage } from './sobre.page';

const routes: Routes = [
  {
    path: '',
    component: SobrePage,
    children: [
      {
        path: 'nolasco',
        loadChildren: () =>
          import('./nolasco/nolasco.module').then((m) => m.NolascoPageModule),
      },
      {
        path: 'gabriel',
        loadChildren: () =>
          import('./gabriel/gabriel.module').then((m) => m.GabrielPageModule),
      },
      {
        path: '',
        redirectTo: 'nolasco', // Define a aba padrão
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '', // Redireciona para a rota principal
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobrePageRoutingModule {}
