import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescFilmService {
  id;
  constructor() {}

  setId(id) {
    this.id = id;
  }
  getId() {
    return this.id;
  }
}
