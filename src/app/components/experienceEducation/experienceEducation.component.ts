import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceEducationData } from '../../models/experienceEducationData'
import { Experience } from '../../models/experience';
import { Education } from '../../models/education';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'experienceEducation',
	templateUrl: './experienceEducation.component.html',
	styleUrls: [ './experienceEducation.component.css' ]
})

export class ExperienceEducationComponent {
	
	closeResult: string;
	selectedExperience:Experience;

	experience:Experience[] = [];
	education:Education[] = []

	experienceTitle:string = 'Experience';
	educationTitle:string = 'Education';

	// experienceEducationData:ExperienceEducationData;

	constructor( private modalService: NgbModal,
				 private dataService:DataService ) {

	}

	ngOnInit() {
		// this.experienceEducationData = this.siteDataService.experienceEducationData;
		this.experienceTitle = 'Experience';
		this.educationTitle = 'Education';
		this.dataService.fetchEducation().subscribe((data) => this.education = data);
		this.dataService.fetchExperience().subscribe((data) => this.experience = data);
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