import { Component, Input } from '@angular/core';
import { Data } from '../../models/data';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'whatCanIDo',
	templateUrl: './whatCanIDo.component.html',
	styleUrls:['./whatCanIDo.component.css']
})

export class WhatCanIDoComponent  {

	data:Data = new Data();

	constructor( private dataService:DataService ) { }

	ngOnInit(){
		this.dataService.fetchWhatCanIDo().subscribe((data) => this.data = data);
	}
}