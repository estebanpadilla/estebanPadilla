import { Component, OnInit } from '@angular/core';
import { Data } from '../shared/models/data';
import { User } from '../shared/models/user';
import { SiteDataService } from '../siteData.service';

@Component({
	selector: 'aboutMe',
	templateUrl: './aboutMe.component.html',
	styleUrls:['./aboutMe.component.css']
})

export class AboutMeComponent  implements OnInit  {

	data:Data;

	constructor( private siteDataService:SiteDataService ) {

		// this.data.title = 'About me';
		// this.data.description = `
		// 	I am a UX Designer & Mentor with 5+ years of professional experience. 
		// 	My passion is solve problems through design thinking and ultimately design 
		// 	solution that makes users happier. Having worked with Research Institute, 
		// 	Service Company & Startups, I have gained hands on experince of various 
		// 	UX methors of all three phases of User Centred Design namely Research, 
		// 	Design and Evaluation. I have also get to know different work culture, 
		// 	people and places in Europe and India. I was a part of more than 30+ 
		// 	project specially for UX Design & Research services for both web & mobile. 
		// 	I am looking for exicting projects where I can design solution based on 
		// 	information ecology that maps user’s requirements and business goals. 
		// 	I hold MS in CS specialised in HCI from the University of Trento, Italy and 
		// 	have 10 certifications in the field of UX.
		// `;
	}

	ngOnInit() {
		this.data = this.siteDataService.aboutMeData;
		//console.log(this.jsonLoaderService.getUser());
		//console.log(this.jsonLoaderService.getHeroes());
	}
}