import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceEducationData } from '../shared/models/experienceEducationData'
import { Experience } from '../shared/models/experience';
import { SiteDataService } from '../siteData.service';

@Component({
	selector: 'experienceEducation',
	templateUrl: './experienceEducation.component.html',
	styleUrls: [ './experienceEducation.component.css' ]
})

export class ExperienceEducationComponent {
	
	closeResult: string;
	selectedExperience:Experience;

	experienceEducationData:ExperienceEducationData;

	constructor( private modalService: NgbModal,
				 private siteDataService:SiteDataService ) {

	}

	ngOnInit() {
		this.experienceEducationData = this.siteDataService.experienceEducationData;
	}

	showData(content, experience:Experience) {
		
		console.log(experience.roll);	
		this.selectedExperience = experience;
		
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