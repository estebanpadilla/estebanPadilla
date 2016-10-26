import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'believe',
	templateUrl: './believe.component.html',
	styleUrls:['./believe.component.css']
})
export class BelieveComponent implements OnInit {
	
	believe1:string;
	believe2:string;

	constructor() {}

	ngOnInit() {
		this.believe1 = `Being a developer is care for people and their needs and find the best solution to help them`;	
		this.believe2 = `I believe in developing things with longevity in mind focusing on the final user needs`;	
	}
}