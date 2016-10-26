import { Component, Input } from '@angular/core';
import { Data } from '../../models/data';
import { SiteDataService } from '../../services/siteData.service';

@Component({
	selector: 'whatCanIDo',
	templateUrl: './whatCanIDo.component.html',
	styleUrls:['./whatCanIDo.component.css']
})

export class WhatCanIDoComponent  {

	data:Data;// = new Data();

	constructor( private siteDataService:SiteDataService ) { }

	ngOnInit(){
		this.data = this.siteDataService.whatCanIDoData;
	}
}