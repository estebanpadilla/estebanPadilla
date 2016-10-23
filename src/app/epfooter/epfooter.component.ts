import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'epfooter',
	templateUrl: './epfooter.component.html',
	styleUrls:['./epfooter.component.css']
})
export class EpFooterComponent implements OnInit {
	
	angularText:string;
	angularImg:string;
	firebaseText:string;
	firebaseImg:string;
	githubText:string;
	githubImg:string;
	rights:string;

	constructor() {}

	ngOnInit() {
		this.angularText = 'Proudly made with Angular 2';
		this.angularImg = '../assets/images/angular.png';
		this.firebaseText = 'Hosted on Google Firebase';
		this.firebaseImg = '../assets/images/firebaseLogo.png';
		this.githubText = 'Repository on Github';
		this.githubImg = '../assets/images/githubLogo.png';
	}
}