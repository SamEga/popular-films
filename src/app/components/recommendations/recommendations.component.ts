import { Component, OnInit } from '@angular/core';
import { DescFilmService } from '../desc-film/desc-film.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  constructor(private desc: DescFilmService, private http: HttpService) {}
  data: any;
  load = false;
  cfg: any;
  recommendations: any;
  ngOnInit() {
    this.getRecommendations(this.desc.getId());
    this.http.getUrlCfg().subscribe(cfg => {
      this.cfg = cfg;
      this.load = true;
    });
  }
  getRecommendations(id: number) {
    this.http.getRecomendations(id).subscribe(data => {
      console.log(data);
      this.data = data;
      this.searchRec();
    });
  }

  searchRec() {
    this.recommendations = this.data.results;
  }
}
