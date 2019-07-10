import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-kurs',
  templateUrl: './detail-kurs.component.html',
  styleUrls: ['./detail-kurs.component.scss']
})
export class DetailKursComponent implements OnInit {

  public courseID;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.courseID = this.route.snapshot.paramMap.get('id');
  }

}
