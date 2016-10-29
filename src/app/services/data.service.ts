import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor( private http:Http ) { }

  fetchUser() {
      return this.http.get('./assets/user.json').map(res => res.json());
  } 

  fetchAbout() {
      return this.http.get('./assets/about.json').map(res => res.json());
  }

  fetchIOSDeveloper() {
    return this.http.get('./assets/iosdeveloper.json').map(res => res.json());
  }

  fetchWhatCanIDo() {
    return this.http.get('./assets/whatcanido.json').map(res => res.json());
  }

  fectchSkills() {
    return this.http.get('./assets/skills.json').map(res => res.json());
  }

  fectchTools() {
    return this.http.get('./assets/tools.json').map(res => res.json());
  }

  fetchDevelopment() {
    return this.http.get('./assets/development.json').map(res => res.json());
  }

  fetchHobbies() {
    return this.http.get('./assets/hobbies.json').map(res => res.json());
  }

  fetchEducation(){
    return this.http.get('./assets/education.json').map(res => res.json());
  }

  fetchExperience() {
    return this.http.get('./assets/experience.json').map(res => res.json());
  }

  fetchHighlights() {
    return this.http.get('./assets/highlights.json').map(res => res.json());
  }
}
