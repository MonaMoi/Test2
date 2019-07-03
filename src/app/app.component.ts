import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'HSPzwonull';

  public news;
  public topcourses;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get('https://hochschulsport-koeln.de/json/news?_format=json')
      .subscribe((data) => {
        this.news = data;
      });
    
    this.http.get('https://hochschulsport-koeln.de/json/topcourses?_format=json')
      .subscribe((data) => {
        this.topcourses = data;
      });
    
  }
}
