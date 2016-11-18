import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css']
})
export class DevelopmentComponent implements OnInit {

  development:Data[] = [];
  title:string;
  description:string;
  designData:Data = new Data();
  developmentData:Data = new Data();
  testingData:Data = new Data();

  constructor( private dataService:DataService ) { }

  ngOnInit() {
    this.dataService.fetchDevelopment().subscribe((data) => {
      this.development = data;
      this.designData = data[0];
      this.developmentData = data[1];
      this.testingData = data[2]; 
    });

    this.title = 'Development Procces';
    this.description = `By having an established process to develop it allows me 
                        to focus on the main functions and core principles of my 
                        current and future projects. Sequentially, it allows me 
                        to build the best possible product.`;
  }

  getTitleColor( data:string ) {
    switch ( data ) {
      case 'Design': return '#ee3344';
      case 'Development': return '#ffdd17';
      case 'Testing': return '#7a5097'
      default: return 'white';
    }
  }

}
