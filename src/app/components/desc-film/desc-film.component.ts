import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from '../../services/http.service';
import { FavoriteService } from '../favorites/favorite.service';
import { DescFilmService } from './desc-film.service';
import { CheckFavoritesService } from '../../services/check-favorites.service';

@Component({
  selector: 'app-desc-film',
  templateUrl: './desc-film.component.html',
  styleUrls: ['./desc-film.component.css']
})
export class DescFilmComponent implements OnInit {
  film: Object;
  filteredFilms: any;
  load: boolean;
  id: number;
  cfg: any;
  favorites: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpService,
    private fav: FavoriteService,
    private desc: DescFilmService,
    private checkfav: CheckFavoritesService
  ) {}

  ngOnInit(): void {
    this.favorites = localStorage.getItem('favorites');
    this.http.getUrlCfg().subscribe(cfg => {
      this.cfg = cfg;
    });
    this.getFilm();
    this.setId();
  }

  getFilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.http.getDescriptionFilm(id).subscribe(film => {
      this.film = film;
      this.load = true;
    });
  }

  setId() {
    this.desc.setId(this.id);
  }

  converDate(date) {
    const newDate = new Date(date);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return newDate.toLocaleDateString('en-US', options);
  }

  addFav(film) {
    this.fav.addFav(film);
  }

  // checkFav() {
  //   for (let index = 0; index < this.favorites.length; index++) {
  //     const element = this.favorites[index];
  //     if (element.id === this.id) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
}
