import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EstebanPadillaComponent } from './estebanPadilla/estebanPadilla.component';
import { AboutMeComponent } from './aboutMe/aboutMe.component';
import { WhatCanIDoComponent } from './whatCanIDo/whatCanIDo.component'
import { RememberToClickComponent } from './rememberToClick/rememberToClick.component';
import { HobbiesComponent } from './hobbies/hobbies.component'
import { SkillsToolsDevelopmentComponent } from './skillsToolsDevelopment/skillsToolsDevelopment.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';
import { ExperienceEducationComponent } from './experienceEducation/experienceEducation.component';
import { EpFooterComponent } from './epfooter/epfooter.component';
import { BelieveComponent } from './believe/believe.component';
import { SiteDataService } from './siteData.service';

@NgModule({
  declarations: [
    AppComponent,
    EstebanPadillaComponent,
    AboutMeComponent,
    WhatCanIDoComponent,
    RememberToClickComponent,
    HobbiesComponent,
    SkillsToolsDevelopmentComponent,
    LenguajesComponent,
    ExperienceEducationComponent,
    EpFooterComponent,
    BelieveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [ SiteDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
