import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFavoritesService {
  constructor() {}
  checkFav(id, favorites) {
    // console.log(favorites);
    // for (let index = 0; index < favorites.length; index++) {
    //   const element = favorites[index];
    //   if (element.id === id) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    // return false;
  }
}
