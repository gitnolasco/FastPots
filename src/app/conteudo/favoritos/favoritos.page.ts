import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage  {

  receitas = [
    { foto: 'assets/macarrao-pressao.webp', nome: 'Macarraõ Panela de Pressão' },
    { foto: 'assets/strogonoff.jpg', nome: 'Strogonoff de Frango' },
    { foto: 'assets/salpicao.jpg', nome: 'Salpicão de Frango' },
    { foto: 'assets/lasanha.jpg', nome: 'Lasanha à bolonhesa' }
    // adicione mais receitas conforme necessário
  ];
  constructor() { }

  ngOnInit() {
  }

}
