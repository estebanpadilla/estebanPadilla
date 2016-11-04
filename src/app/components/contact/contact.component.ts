import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user';

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html',
	styleUrls:[ './contact.component.css']
})
export class ContactComponent implements OnInit {
	
	user:User = new User();
	image1:string;
	image2:string;
	title:string;
	description:string;

	constructor(private dataService:DataService) {}

	ngOnInit() {
		// this.user = this.siteDataService.user;
		this.dataService.fetchUser().subscribe((data) => this.user = data);
		this.image1 = "M67.9 58.1l-26.9-22.6v28.8c0 1.5 1.2 2.7 2.7 2.7h48.3c1.5 0 2.7-1.2 2.7-2.7v-28.8l-26.8 22.6zM91.4 32h-47l23.5 19.7z";
		this.image2 = "M34.1 50.3h-14.5c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4h14.5c1.3 0 2.4 1.1 2.4 2.4 0 1.4-1.1 2.4-2.4 2.4zM34.1 40.6h-27c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4h27c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4zM34.1 60.1h-7.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4h7.2c1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z";	
		this.title = 'Would you like to hire me?';
		this.description = `I have to tell you that I take my work very seriously 
							and I'm always aiming for high standars and quality,  
							if you are interested we can talk and find the best 
							fit for both of us.`;
	}
}