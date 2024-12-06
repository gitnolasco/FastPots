import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoPage } from './conteudo.page';

const routes: Routes = [
  {
    path: '',
    component: ConteudoPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule),
      },
      {
        path: 'pesquisar',
        loadChildren: () => import('./pesquisar/pesquisar.module').then(m => m.PesquisarPageModule),
      },
      {
        path: 'favoritos',
        loadChildren: () => import('./favoritos/favoritos.module').then(m => m.FavoritosPageModule),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConteudoPageRoutingModule {}
