import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  filteredFilms: any;
  baseUrl: any;
  imgsize300: any;
  genres: any;
  cfg: any;
  data: any;
  constructor(private http: HttpService) {}
  ngOnInit() {
    this.http.getUrlCfg().subscribe(cfg => {
      this.cfg = cfg;
    });

    this.http.getGenres().subscribe(genres => {
      console.log(genres);
      this.genres = genres;
    });
  }
  searchFilm(event: any) {
    if (event.target.value) {
      this.http.getFilteredFilms(event.target.value).subscribe(data => {
        this.data = data;
        this.searchResult();
      });
    }
  }

  searchResult() {
    this.filteredFilms = this.data.results;
  }

  searchGenre(ids) {
    const genres = [];
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      for (let index = 0; index < this.genres.genres.length; index++) {
        const element = this.genres.genres[index];
        if (element.id === id) {
          genres.push(element.name);
        }
      }
    }
    return genres;
  }
}
