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
	image:string;
	title:string;
	description:string;

	constructor(private dataService:DataService) {}

	ngOnInit() {
		// this.user = this.siteDataService.user;
		this.dataService.fetchUser().subscribe((data) => this.user = data);
		this.image = '../assets/images/emailMeIcon.svg'	
		this.title = 'Interested in hiring with me?';
		this.description = `I have to tell you that I take my work very seriously 
							and I am always aiming for perfection and quality,  
							if you are interested we can talk and find the best 
							fit for both of us.`;
	}
}