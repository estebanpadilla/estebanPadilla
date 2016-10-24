import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'believe',
	templateUrl: 'believe.component.html',
	styleUrls:['./believe.component.css']
})
export class BelieveComponent implements OnInit {
	
	believe1:string;
	believe2:string;

	constructor() {}

	ngOnInit() {
		this.believe1 = `I believe in developing things with longevity in mind always focusing on the final user needs. Designing for the future is profitable and leaves a lasting experience.`;	
		this.believe2 = `I believe in developing things with longevity in mind always focusing on the final user needs.`;	
	}
}