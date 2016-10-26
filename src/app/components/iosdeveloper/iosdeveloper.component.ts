import { Component, OnInit } from '@angular/core';
import { SiteDataService } from '../../services/siteData.service';

@Component({
	selector: 'iosdeveloper',
	templateUrl: './iosdeveloper.component.html',
	styleUrls:[ './iosdeveloper.component.css']
})

export class IosdeveloperComponent implements OnInit {
	
	title:string;
	description:string;
	image:string;

	titleIOS:string;
	descriptionIOS:string;
	imageIOS:string;

	iosText1:string;
	iosText2:string;
	iosText3:string;

	titleGame:string;
	descriptionGame:string;
	imageGame:string;

	constructor( private siteDataService:SiteDataService ) {}

	ngOnInit() {
		this.title = 'Need and iOS Developer?';
		this.description = `I am passionate iOS Developer with years 
							of experience in building apps and games 
							for iPhone and iPad, I love new technologies 
							and I am always looking for interesting 
							and challenging projects, so if you are 
							looking for someone to help you develop 
							the app or games of your dreams do not 
							hesitate to contact me, I would love to 
							work with you.`;

		this.iosText1 = `You have an amazing app idea and you are ready 
						to make come true, but you are wondering.`;
		this.iosText2 = `What is the best technology to choose?`;
		this.iosText3 = `That is a very important question that always 
						comes up and the answer depends on the user experience 
						that you would like your app to have. Obviously the 
						goal is to make a great app and only natives technolgies 
						would give you all the resources to achieve that and 
						enabling it to have all the chances to excel. I have 
						many years of experience in application development and 
						I have seen trends to come and go but because nothing can 
						beat native developement done right way.`;

		this.image = '../assets/images/iosDevelopmentImg.svg';

		this.titleIOS = 'App Development';
		this.descriptionIOS = `You have an amazing app idea and 
							you are ready to make come true. One 
							important question that always comes up 
							is what is the right technology to choose? 
							The answer is very simple, if the user 
							experience on your app is very important you 
							should develop your app with native 
							technolgies because you want your app to 
							have all the chances to excel. I have many 
							years of experience in application 
							development for various platforms. 
							Currently I’m specialized in native 
							iOS development. `;
		this.imageIOS = '../assets/images/iosDevelopmentIcon.svg';

		this.titleGame = 'Game Development';
		this.descriptionGame = `I also have a lot of experience in creating 
							games and I can help you by giving your game idea 
							a proper boost to completion and not only that, 
							I can also help you with recomendation and advice 
							on the all stages to make your game a great sucess.`;
		this.imageGame = '../assets/images/gameDevelopmentIcon.svg';
	}
}