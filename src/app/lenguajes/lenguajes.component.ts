import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Lenguaje } from '../shared/models/lenguaje';
import { SiteDataService } from '../siteData.service';

@Component({
	selector: 'lenguajes',
	templateUrl: './lenguajes.component.html',
	styleUrls: [ './lenguajes.component.css' ]
})

export class LenguajesComponent implements OnInit {
	
	closeResult: string;
	title:string;
	selectedLenguaje:Lenguaje;
	lenguajes:Lenguaje[];

	constructor(private modalService: NgbModal,
				private siteDataService:SiteDataService) {
	}

	ngOnInit() {
		this.lenguajes = this.siteDataService.lenguajes;
		this.title = 'Lenguajes';
	}

	showLenguaje(content, lenguaje:Lenguaje) {
		this.selectedLenguaje = lenguaje;
		
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