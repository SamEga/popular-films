import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorites/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  constructor(private fav: FavoriteService) {}

  favorites = [];
  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
  }

  delFav(id) {
    for (let index = 0; index < this.favorites.length; index++) {
      const element = this.favorites[index];
      if (element.id === id) {
        this.favorites.splice(index, 1);
      }
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
