import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FilmsComponent } from '../films/films.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page = 1;
  constructor(private http: HttpService, private films: FilmsComponent) {}

  ngOnInit() {}

  nextPage() {
    this.films.nextPage();
    this.page = this.films.getPage();
  }

  backPage() {
    this.films.backPage();
    this.page = this.films.getPage();
  }
}
