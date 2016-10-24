import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'rememberToClick',
	templateUrl: './rememberToClick.component.html',
	styleUrls:['rememberToClick.component.css']
})
export class RememberToClickComponent implements OnInit {
	
	title:string;

	constructor() {}

	ngOnInit() {
		this.title = 'You can to click on my skills, rolls and hobbies to see more information.';	
	}
}