import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorites = [];
  constructor() {}

  addFav(film) {
    console.log(film);
    if (localStorage.getItem('favorites')) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'));
      if (!this.search(film.id)) {
        this.favorites.push(film);
      }
    } else {
      this.favorites = [];
      this.favorites.push(film);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  search(id) {
    for (let index = 0; index < this.favorites.length; index++) {
      const element = this.favorites[index];
      if (element.id === id) {
        return true;
      }
    }
  }
}
