import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Hobbie } from '../../models/hobbie';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'hobbies',
	templateUrl: './hobbies.component.html',
	styleUrls:['./hobbies.component.css']
})

export class HobbiesComponent  {
	
	closeResult: string;
	title:string;
	subtitle:string;

	selectedHobbie:Hobbie;
	hobbies:Hobbie[] = [];

	constructor( private modalService: NgbModal,
				 private dataService:DataService ) {
	}

	ngOnInit() {
		this.dataService.fetchHobbies().subscribe((data) => this.hobbies = data);
		this.title = 'Hobbie and interests';	
		this.subtitle = 'Here is a list of all thing that I am obsessed about, please do not judge me for some of the things I like.';
	}

	showHobbie(content, hobbie) {

		this.selectedHobbie = hobbie;
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