import { User } from './shared/models/user';
import { Data } from './shared/models/data';
import { Hobbie } from './shared/models/hobbie';
import { SkillsToolsDevelopmentData } from './shared/models/skillsToolsDevelopmentData';
import { Lenguaje } from './shared/models/lenguaje';
import { Education } from './shared/models/education';
import { Experience } from './shared/models/experience';
import { ExperienceEducationData } from './shared/models/experienceEducationData';

export class SiteDataService {
	
	user:User = new User();
	aboutMeData:Data = new Data();
	whatCanIDoData:Data = new Data();
	hobbies:Hobbie[];
	skills:Data[];
	tools:Data[];
	development:Data[];
	skillsToolsDevelopmentData:SkillsToolsDevelopmentData = new SkillsToolsDevelopmentData();
	lenguajes:Lenguaje[];
	experienceList:Experience[];
	educationList:Education[]
	experienceEducationData:ExperienceEducationData = new ExperienceEducationData();

	constructor() {

		this.user.name = 'Esteban Padilla';
		this.user.description = 'Husband, father and crazy about programming,  games and design.';
		this.user.location = 'Cartago, Costa Rica';
		this.user.email = 'ep@estebanpadilla.com';
		this.user.phone = '(506) 8706-6660';
		this.user.avatar = '../app/shared/images/avatar.png';

		this.aboutMeData.title = 'About me';
		this.aboutMeData.descriptions = [`
		Based in Costa Rica, somewhere near Cartago, 
		I live happily with my lovely wife and four daughters.`,
		
		`If I have to give myself a job title I suppose it would be 
		a mobile developer since all my work experiences have been 
		around mobile devices either in games or applications. 
		It gets straight to the point although my expertises and 
		knowledge covers a whole lot more.`,
		
		`For the past two years I have been working mostly on the iOS development and right 
		now I am catching up with some of the latest web technologies like Angular 2.`,

		`I believe in developing things with longevity in mind always focusing on the final user needs.
		Designing for the future is profitable and leaves a lasting 
		experience.`, 

		`What I pride myself the most is that not matter how hard the task 
		I will always look for a solution to get the job done on time . 
		This is the most enjoyable part of my job, when you go to sleep at 
		night knowing that you accomplished something today, what a nice feeling...`
		];
		this.aboutMeData.listTitle = '';
		this.aboutMeData.list = [];

		this.whatCanIDoData.title = 'Do you need a reliable hand with your development project?';
		this.whatCanIDoData.descriptions = [
		`I can pick up the overflow to help deliver your project on time. 
		I pride myself in communication and initiative to ensure my involvement 
		is always seamless, flexible, cost-effective, and the highest of quality.`
		];
		this.whatCanIDoData.listTitle = 'Here’s how I can help you:';
		this.whatCanIDoData.list = [
		'I can help you on all the development stages of your iOS project.',
		'I’m comfortable working both behind the scenes and in client-facing roles.',
		'I can adapt to your workflow and tools (or even introduce something new).',
		'I have a design education and an excellent eye to catch the good stuff.',
		'I focus my developement on the UI/UX best practices, and common sense.',
		'Are you planning to create a game with Unity 3D, I can help you with that too.',
		'My billing time is flexible and my rates are competitive.',
		'Looking for a fixed price? No problem!'
		];

		this.hobbies = [ 	
			{ 	id:1, 
				name:'Music', 		
				image:'../app/shared/images/music.png', 
				imageModal:'../app/shared/images/musicModal.png', 
				description:`Music is a big part of my life and I feel very 
							passionate for certain styles and mostly the Southern-Rock. 
							Every now and then you find something that really suits 
							you and I can not explain what it is or how that happens. 
							The thing about Southern-Rock is the combination of different 
							styles and cultures that makes think about the posibities 
							when people get toguether to create something new.`
			},
			{ 
				id:2, 
				name:'Games', 		
				image:'../app/shared/images/games.png', 
				imageModal:'../app/shared/images/gamesModal.png', 
				description:`The first video game that I ever play was Asteroids in an 
							Atari 2600 that my oldest brother brought home. 
							I remember it was around 9 pm and across the wall 
							I heard a sound that I never heard before it was the 
							ships laser shooting sound I knew that it was 
							something new and cool. The years when by and 
							I ended up studying animation, programing and working 
							on a game development company.`
			},
			{ 
				id:3, 
				name:'Reading', 	
				image:'../app/shared/images/reading.png', 
				imageModal:'../app/shared/images/readingModal.png', 
				description:`I just to pickup a book on the library and spend 
							hours sitting in a couch reading it. Now a days I do not have that privilege, 
							family, work, study and other hobbies consume most of my time 
							but I do find myself reading a lot of blogs, news and other 
							things that are not, precisely reading a book.`
			},
			{ 
				id:4, 
				name:'Apple Inc', 	
				image:'../app/shared/images/apple.png', 
				imageModal:'../app/shared/images/appleModal.png', 
				description:`I feel very emotionally attached to all Apple products, 
							their design and quality is something that I admired and inspires me a lot, 
							in fact the love to my Macbook Pro and iPhone lead my path 
							to become an iOS developer, do not get me wrong, 
							I also like Android.`
			},
			{ 
				id:5, 
				name:'Guitar', 		
				image:'../app/shared/images/guitar.png', 
				imageModal:'../app/shared/images/guitarModal.png', 
				description:`When I was about 14 years old I saw Jimy Page 
							playing his Les Paul the sound and overall the music 
							really woke up something in me a few decades after 
							I am still learning how to play the guitar, 
							I guess there are some things you never stop learning.`
			},
			{ 
				id:6, 
				name:'Movies', 		
				image:'../app/shared/images/movies.png', 
				imageModal:'../app/shared/images/moviesModal.png', 
				description:`I enjoy watching movies that makes me think 
							even if it is a comedy, drama o whatever, 
							it needs to fullfill that part of me to 
							have me sitting for two hours and watch it.`
			},
			{ 
				id:7, 
				name:'Coffee', 		
				image:'../app/shared/images/coffee.png', 
				imageModal:'../app/shared/images/coffeeModal.png', 
				description:`Growing up on a country with such a long 
							coffee tradition is hard not to be a coffee 
							addict and lover. I really enjoy having a 
							cup of coffee when a wake up and during the afternoon.`
			},
			{ 
				id:8, 
				name:'Scketching', 	
				image:'../app/shared/images/sketching.png', 
				imageModal:'../app/shared/images/sketchingModal.png', 
				description:`When I am working on a design I feel the best 
							and faster way to communicate your ideas is 
							by drawing sketchs on a piece of paper. `
			},
			{ 
				id:8, 
				name:'TV', 	
				image:'../app/shared/images/tv.png', 
				imageModal:'../app/shared/images/tvModal.png', 
				description:`I usually do not watch a lot of tv but sometimes 
							I take a look a Netflix and find something good. 	
							We do not have a cable subscription or the local 
							channels on our tv and just because there is nothing to watch there.`
			},
			{ 
				id:8, 
				name:'Cooking', 	
				image:'../app/shared/images/cook.png', 
				imageModal:'../app/shared/images/cookModal.png', 
				description:`I like to cook a lot and I am not a chef and anything like it, 
							I just like to prepare something good for my family to enjoy.`
			},
			{ 
				id:8, 
				name:'Soccer', 	
				image:'../app/shared/images/soccer.png', 
				imageModal:'../app/shared/images/soccerModal.png', 
				description:`I enjoy a lot playing soccer with my friends its a shame 
							that it does not happen very often, people get too involve 
							with their lives and forget about  leaving time for themselves, 
							I guess it is just the way it is.`
			},
			{ 
				id:8, 
				name:'Swiming', 	
				image:'../app/shared/images/swiming.png', 
				imageModal:'../app/shared/images/swimingModal.png', 
				description:`Exercise is always good and I grow up near a 
							lake and I always had time to swim when I was a 
							kit now I am leaving close to a comunity 
							pool and I am thinking to go back to my old customs.`
			},
			{ 
				id:8, 
				name:'Camping', 	
				image:'../app/shared/images/camping.png', 
				imageModal:'../app/shared/images/campingModal.png', 
				description:`I love nature and everytime I can 
							I escape to spend some time on the rain 
							forest I do it, who does not?`
			},
			{ 
				id:8, 
				name:'Cat', 	
				image:'../app/shared/images/cat.png', 
				imageModal:'../app/shared/images/catModal.png', 
				description:`When I was a kid I found a cat on the local river, 
							I gues someone try to get rid of him, 
							I remember having good times with him. 
							Last year we adopted a cat that a friends of ours 
							could not keep, her name is Lola and now we do not our 
							lives without a cat living with us.`
			},
			{ 
				id:8, 
				name:'Bike', 	
				image:'../app/shared/images/bike.png', 
				imageModal:'../app/shared/images/bikeModal.png', 
				description:`As part of my adventures sometimes I take my 
							bike for a ride. There is something about the 
							feeling of freedom that riding a bike gives me, 
							I do not expect you to understand.`
			}

		];

		this.skills = [
			{	
				title:'Creativity', 
				descriptions:[`Part of my daily routine is to use my imagination 
								to come up with new ideas to solve problems, 
								create new things, entertain my kids, cook a meal, etc.`], 
				image:'../app/shared/images/creativity.png',
				listTitle:'',
				list:[]
			},
			{	
				title:'Teamwork', 
				descriptions:[`Working with other people is not something 
							that everyone is capable to do. When working on a 
							team there are many things to consider but I believe 
							the most importan is the effective comunication, 
							being open to receive and give positive feed 
							back and leaving your ego at the door step.`],
				image:'../app/shared/images/teamWork.png',
				listTitle:'',
				list:[]
			},
			{	
				title:'Team management', 
				descriptions:[`Watch others to make sure that everything 
							is ok and they are doing their jobs is complicated, 
							I believe the best approach is to know every member of 
							the team very well and determine their strengths 
							and weaknesses prior to assign tasks, 
							once you know that is easy to delegate and manage a team.`],
				image:'../app/shared/images/teamManagement.png',
				listTitle:'',
				list:[]
			},
			{	
				title:'Communication', 
				descriptions:[`More than express my ideas by word, drawing or diagrams, 
								wich I can do very well, I think that communication its 
								a big part of a proyect and having a line open to 
								communicate constantly I beleive is essencial to 
								any thing you want to do when working on a team.`],
				image:'../app/shared/images/comunication.png',
				listTitle:'',
				list:[]
			},
			{	
				title:'Think Ahead', 
				descriptions:[`I use a lot of brain power to plan my day 
							and keep problems and accidents 
							from happening, it is what parents do and I usually 
							apply the same tecniques to my work.`],
				image:'../app/shared/images/timeManagement.png',
				listTitle:'',
				list:[]
			},
			{	
				title:'Ability to Work Under Pressure', 
				descriptions:[`I know that sometimes projects have 
							constraints which are often outside of control, 
							these might be resource or time constraints, 
							the difficulty of the task or not having insufficient 
							knowledge required to complete the task, 
							or unforeseen changes or problems and I know that 
							effective planning and time-management is not enough 
							to reduce the likelihood of some situations occurring. 
							I beleive that I have enought experience to 
							understand and adapt to this situation quickly.`],
				image:'../app/shared/images/timeManagement.png',
				listTitle:'',
				list:[]
			},
			{	
				title:'Time Management', 
				descriptions:[`I plan my time so that I don't forget to do things, 
								I am almost always on time, depending on the 
								horrible traffic, and I know how to prioritize 
								and give myself enough time to do the things that 
								I need to do, I tried to keep this note in mind, 
								wisdom is knowing what to do next, skill is 
								knowing how to do it,  and virtue is doing it.`],
				image:'../app/shared/images/timeManagement.png',
				listTitle:'',
				list:[]
			},
			{	
				title:'Decision Making', 
				descriptions:[`This is something that you do not learn in 
								school and only life will teach you, 
								make good judgements about what to do in a 
								difficult situation even when the supervisor 
								is not present, as a parent, I am in charge 
								of making responsible desicions every day, 
								hour and minute of my life.`],
				image:'../app/shared/images/leadership.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Empathy', 
				descriptions:[`I tried to always think about how others may 
							feel about things, especially before I say 
							or do things that may affect them also I beleive 
							in people and I do not think you are only worthy 
							on one chance in life, sometimes people 
							needs more than one chance to do the right thing.`],
				image:'../app/shared/images/empathy.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Leadership', 
				descriptions:[`The ability to lead effectively a team is 
								based on a number of key skills, I can mentions 
								some that I think I have and makes me a good leader, 
								trustworthy, reliable, helpfull, listener, proactive.`],
				image:'../app/shared/images/leadership.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Quick Learner', 
				descriptions:[`Almost everything that we do now are new 
							things following the instructions from a tutorial, 
							a cooworker, a site, a book to accomplish 
							our responsibilities or bring to live our ideas.`],
				image:'../app/shared/images/fastlearner.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Loyal and Discreet', 
				descriptions:[`I can be trusted to get the job done, 
								to look after things or keep secrets that are very 
								important to other people. I am also committed and devoted 
								to things or people that mean a lot to me or put their trust on me.`],
				image:'../app/shared/images/leadership.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Efficient', 
				descriptions:[`I am always looking for way to improve 
							my performance when doing tasks in the 
							fastest and simplest ways that they can be done, 
							like is too short to spend to much time in one task.`],
				image:'../app/shared/images/fastlearner.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Flexible', 
				descriptions:[`I can carry out many different responsibilities, 
							sometimes with very little advanced notice, 
							this could make someone feel under presure and stressfull, 
							I look at it this way, it is a new challenge.`],
				image:'../app/shared/images/leadership.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Detail-oriented', 
				descriptions:[`I am always on the hunt for details and making a 
							conscious analysis to understand causes instead 
							of just the effects, sometimes I feel that I go to 
							far by trying to have everything well aligned, ui-wise speakling.`],
				image:'../app/shared/images/leadership.png',
				listTitle:'',
				list:[]
			}
		];

		this.tools = [
			{
				title:'Xcode', 
				descriptions:[],
				image:'../app/shared/images/appleInc.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Paintcode', 
				descriptions:[],
				image:'../app/shared/images/paintCode.png',
				listTitle:'',
				list:[]
			},
			{	title:'Illustrator', 
				descriptions:[],
				image:'../app/shared/images/illustrator.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Photoshop', 
				descriptions:[],
				image:'../app/shared/images/photoshop.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Sketchapp', 
				descriptions:[],
				image:'../app/shared/images/sketchapp.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Git', 
				descriptions:[],
				image:'../app/shared/images/github.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Jira', 
				descriptions:[],
				image:'../app/shared/images/jira.png',
				listTitle:'',
				list:[]
			}
		];

		this.development = [
			{
				title:'iOS', 
				descriptions:[],
				image:'../app/shared/images/appleInc.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Unity 3D', 
				descriptions:[],
				image:'../app/shared/images/unity3d.png',
				listTitle:'',
				list:[]
			},
			{
				title:'Web', 
				descriptions:[],
				image:'../app/shared/images/web.png',
				listTitle:'',
				list:[]
			},
		];

		this.lenguajes = [ 
			{
				name:'English',
				speakingLevel:'80',
				readingLevel:'90',
				image:'../app/shared/images/english.png',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}, 
			{
				name:'Spanish',
				speakingLevel:'100',
				readingLevel:'100',
				image:'../app/shared/images/spanish.png',
				description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}
		];

		this.skillsToolsDevelopmentData.skills = this.skills;
		this.skillsToolsDevelopmentData.tools = this.tools;
		this.skillsToolsDevelopmentData.development = this.development;

		this.experienceList = [ 
			{ 	
				company:'Fair Play Labs', 
				roll:'Game Developer', 
				period:'Dec 2011 - Nov 2013',
				image:'../app/shared/images/gameDeveloper.png',
				rollDescription:`Working on Fair Play Labs was one 
								of the most happiest experiences I ever 
								had and not only because the work enviroment 
								was great but also because the kind of 
								work I was doing, video games. Create a 
								game has a lot of challenges and that is 
								what I enjoy about that. Looking back to the 
								proyects I did there I do not remember one 
								that I did not like. I did most of the work 
								on Unity 3D but also I developed a proyect 
								with the Marmalade SDK.`,
				rollResponsabilities:['Follow the Game Design Document to develop the product.', 
									'Collaborate with team members to meet the proyect deadlines.',
									'Follow proyect manager instructions and guides lines.',
									'Follow the coding best practices.',
									'Follow the company coding standards.',
									'Give time base estimates for tasks to schedule releases.',
									'Communicate with team members to keep track of the proyect progress.',
									'Deliver and schedule beta releases to clients for reviewing purposes.',
									'Maintain proyect repositories according to the company best practices and standars.',
									'Communicate proyect progress to team managers constantly.',
									'Manage proyect stories and tasks for agiles development.',
									'Publish product on the apple store.']
			},
			{ 	
				company:'Hewllet Packard Costa Rica', 
				roll:'Software engineer', 
				period:'Nov 2013 - April 2014',
				image:'../app/shared/images/developer.png',
				rollDescription:'Roll description',
				rollResponsabilities:['Roll responsability 1', 'Roll responsability 2']
			},
			{ 	
				company:'Biin (startup)', 
				roll:'iOS Developer', 
				period:'May 2014 - June 2016',
				image:'../app/shared/images/appleInc.png',
				rollDescription:'Roll description',
				rollResponsabilities:['Roll responsability 1', 'Roll responsability 2']
			}
		];

		this.educationList = [
			{ 	
				institution:'CTPI José Figueres Ferrer', 
				achievement:'Bachiller y Técnico medio en Electrotecnia.'
			},
			{ 	
				institution:'Universidad Veritas', 
				achievement:'Animación Digital (Not completed)'
			},
			{ 	
				institution:'Univerdiad Cenfotec', 
				achievement:'Diplomado en Desarrollo de Software'
			},
			{ 	
				institution:'Big Nerd Ranch', 
				achievement:'iOS Development Training'
			}
		];

		this.experienceEducationData.experienceList = this.experienceList;
		this.experienceEducationData.educationList = this.educationList;
		this.experienceEducationData.experienceTitle = 'Experience';
		this.experienceEducationData.educationTitle = 'Education';

	 }
}