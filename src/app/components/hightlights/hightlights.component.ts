import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hightlights',
  templateUrl: './hightlights.component.html',
  styleUrls: ['./hightlights.component.css']
})
export class HightlightsComponent implements OnInit {

  title:string;
  hightlights:string[] = [];
  image:string;

  constructor() { }

  ngOnInit() {

    this.title = 'Hightlights about me';
    this.hightlights = ['Design', 'Code', 'Management', 'Communication'];
    this.image = '../assets/images/apple.png';
  }

}
