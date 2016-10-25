import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../siteData.service';
import { User } from '../shared/models/user';

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html',
	styleUrls:[ './contact.component.css']
})
export class ContactComponent implements OnInit {
	
	user:User;
	title:string;
	description:string;

	constructor(private siteDataService:SiteDataService) {}

	ngOnInit() {
		this.user = this.siteDataService.user;	
		this.title = 'Interested in hiring with me?';
		this.description = `I have to tell you that I take my work very seriously 
							and I am always aiming for perfection and quality,  
							if you are interested we can talk and find the best 
							fit for both of us.`;
	}
}