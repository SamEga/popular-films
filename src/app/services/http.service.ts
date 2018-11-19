import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiKey = '750f42580e9ab3e606572380337a42c9';
  constructor(private http: HttpClient) {}

  getUrlCfg() {
    return this.http.get(
      `https://api.themoviedb.org/3/configuration?api_key=${this.apiKey}`
    );
  }

  getPopularFilms(page) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        this.apiKey
      }&language=en-US&page=${page}`
    );
  }

  getFilteredFilms(event: string) {
    const encodedEvent = encodeURI(event);
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        this.apiKey
      }&language=en-US&query=${encodedEvent}`
    );
  }

  getDescriptionFilm(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${
      this.apiKey
    }&language=en-US
    `);
  }

  getGenres() {
    return this.http
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${
      this.apiKey
    }&language=en-US
    `);
  }

  getRecomendations(id: number) {
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${
      this.apiKey
    }&language=en-US&page=1
    `);
  }
}
