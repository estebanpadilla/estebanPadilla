import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Data } from '../../models/data';
import { SkillsToolsDevelopmentData } from '../../models/skillsToolsDevelopmentData';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'skillsToolsDevelopment',
	templateUrl: './skillsToolsDevelopment.component.html',
	styleUrls: ['./skillsToolsDevelopment.component.css']

})
export class SkillsToolsDevelopmentComponent {
	
	skills:Data[] = [];
	tools:Data[] = [];
	development:Data[] = [];

	title:string;
	description:string;
	closeResult: string;
	selectedData:Data;
	skillsToolsDevelopmentData;

	constructor( private modalService: NgbModal,
				 private dataService:DataService ) {

	}

	ngOnInit() {
		//this.skillsToolsDevelopmentData = this.siteDataService.skillsToolsDevelopmentData;
		this.dataService.fectchSkills().subscribe((data) => this.skills = data);
		this.dataService.fectchTools().subscribe((data) => this.tools = data);
		this.dataService.fetchDevelopment().subscribe((data) => this.development = data);
		
		this.title = 'I am good in...';
		this.description = 'Here a list of different things and fields that I beleive I am good doing.';
	}

	showData(content, data:Data) {
		
		this.selectedData = data;
		this.modalService.open(content).result.then((result) => {
      		this.closeResult = `Closed with: ${result}`;
    	}, (reason) => {
      		this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    	});
	}

	private getDismissReason(reason: any): string {
    	if (reason === ModalDismissReasons.ESC) {
      		return 'by pressing ESC';
    	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      		return 'by clicking on a backdrop';
    	} else {
      		return  `with: ${reason}`;
    	}
  	}
}