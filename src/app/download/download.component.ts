import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'download',
	templateUrl: 'download.component.html',
	styleUrls:['download.component.css']
})
export class DownloadComponent implements OnInit {
	
	title:string;
	download:string;

	constructor() {}

	ngOnInit() {
		this.title = 'You can download this Angular 2 project and use it as you wish.'	
		this.download = 'Download'	
	}
}