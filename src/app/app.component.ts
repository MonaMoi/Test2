import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'HSPzwonull';

  public courses;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get('https://hochschulsport-koeln.de/json/courses?_format=json')
      .subscribe((data) => {
        this.courses = data;
        console.log(data)
      });
  }
}
