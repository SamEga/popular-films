import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FavoriteService } from '../favorites/favorite.service';
import { CheckFavoritesService } from '../../services/check-favorites.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  cfg: any;
  popularFilms: any;
  films: any;
  imgsize780: any;
  baseUrl: any;
  page = 1;
  favorites;

  constructor(
    private http: HttpService,
    private fav: FavoriteService,
    private checkFav: CheckFavoritesService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
    const popular = this.http.getPopularFilms(this.page);
    const cfg = this.http.getUrlCfg();
    forkJoin([cfg, popular]).subscribe(data => {
      this.cfg = data[0];
      this.films = data[1];
      this.renderFilms();
    });
  }

  renderFilms() {
    this.popularFilms = this.films.results;
  }

  nextPage() {
    this.page += 1;
    this.getData();
  }

  backPage() {
    this.page -= 1;
    this.getData();
  }

  getPage() {
    return this.page;
  }

  addFav(event, film) {
    event.stopPropagation();
    this.fav.addFav(film);
  }

  // checkFavorites(id) {
  //   this.checkFav.checkFav(id, this.favorites);
  // }
}
