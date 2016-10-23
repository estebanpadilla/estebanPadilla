import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'epfooter',
	templateUrl: './epfooter.component.html',
	styleUrls:['./epfooter.component.css']
})
export class EpFooterComponent implements OnInit {
	
	angularText:string;
	angularImg:string;
	githubText:string;
	githubImg:string;
	rights:string;

	constructor() {}

	ngOnInit() {
		this.angularText = 'Proudly made with Angular 2';
		this.angularImg = '../assets/images/angular.png';
		this.githubText = 'Hosted on Github Pages';
		this.githubImg = '../assets/images/githubLogo.png';
	}
}