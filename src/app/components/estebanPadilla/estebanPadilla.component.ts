import { Component } from '@angular/core';
import { User } from '../../models/user';
import { SiteDataService } from '../../services/siteData.service';

@Component({
	selector: 'estebanpadilla',
	templateUrl: './estebanPadilla.component.html',
	styleUrls:[ './estebanPadilla.component.css']
})

export class EstebanPadillaComponent {

	user:User;// = new User();
	updateTitle:string;
	lastUpdate:string;

	constructor(private siteDataService:SiteDataService){
		// this.user.name = 'Esteban Padilla';
		// this.user.description = 'Husband, father and crazy about programming,  games and design.';
		// this.user.location = 'Cartago, Costa Rica';
		// this.user.email = 'ep@estebanpadilla.com';
		// this.user.phone = '(506) 8706-6660';
		// this.user.avatar = '../app/estebanPadilla/avatar.png';
	}

	ngOnInit() {
		this.user = this.siteDataService.user;
		this.updateTitle = 'Updated';
		this.lastUpdate = 'Oct 2017';
	}


}