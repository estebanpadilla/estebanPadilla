import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'aboutMe',
	templateUrl: './aboutMe.component.html',
	styleUrls:['./aboutMe.component.css']
})

export class AboutMeComponent  implements OnInit  {

	data:Data = new Data();

	constructor( private dataService:DataService ) { }

	ngOnInit() {
		this.dataService.fetchAbout().subscribe(((data) => this.data = data));
	}
}