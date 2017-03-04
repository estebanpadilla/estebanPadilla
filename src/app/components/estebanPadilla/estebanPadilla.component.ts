import { Component, HostListener } from '@angular/core';
import { User } from '../../models/user';
import { SiteDataService } from '../../services/siteData.service';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'estebanpadilla',
	templateUrl: './estebanPadilla.component.html',
	styleUrls: ['./estebanPadilla.component.css']
})

export class EstebanPadillaComponent {

	user: User = new User();
	updateTitle: string;
	lastUpdate: string;
	sign: string = '../assets/images/sign.svg';

	//Track scroll proccess
	// @HostListener('window:scroll', ['$event']) 
	// doSomething(event) {
	//   console.debug("Scroll Event", document.body.scrollTop);
	// }


	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.dataService.fetchUser().subscribe(((data) => this.user = data));
		this.updateTitle = 'Updated';
		this.lastUpdate = 'March 2017';
	}
}