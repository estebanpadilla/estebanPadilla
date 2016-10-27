import { Component, OnInit } from '@angular/core';
import { IOSDeveloper } from '../../models/iosdeveloper'
import { DataService } from '../../services/data.service';

@Component({
	selector: 'iosdeveloper',
	templateUrl: './iosdeveloper.component.html',
	styleUrls:[ './iosdeveloper.component.css']
})

export class IosdeveloperComponent implements OnInit {
	

	iosdeveloper:IOSDeveloper = new IOSDeveloper();

	// title:string;
	// description:string;
	// image:string;

	// titleIOS:string;
	// descriptionIOS:string;
	// imageIOS:string;

	// iosText1:string;
	// iosText2:string;
	// iosText3:string;

	// titleGame:string;
	// descriptionGame:string;
	// imageGame:string;

	constructor( private dataService:DataService ) {}

	ngOnInit() {
		this.dataService.fetchIOSDeveloper().subscribe((data) => this.iosdeveloper = data);
	}
}