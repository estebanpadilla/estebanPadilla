import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EstebanPadillaComponent } from './components/estebanPadilla/estebanPadilla.component';
import { AboutMeComponent } from './components/aboutMe/aboutMe.component';
import { IosdeveloperComponent } from './components/iosdeveloper/iosdeveloper.component';
import { WhatCanIDoComponent } from './components/whatCanIDo/whatCanIDo.component'
import { RememberToClickComponent } from './components/rememberToClick/rememberToClick.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component'
import { SkillsToolsDevelopmentComponent } from './components/skillsToolsDevelopment/skillsToolsDevelopment.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { ExperienceEducationComponent } from './components/experienceEducation/experienceEducation.component';
import { EpFooterComponent } from './components/epfooter/epfooter.component';
import { DownloadComponent } from './components/download/download.component';
import { BelieveComponent } from './components/believe/believe.component';
import { ContactComponent } from './components/contact/contact.component';

import { SiteDataService } from './services/siteData.service';
import { DataService } from './services/data.service';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { DevelopmentComponent } from './components/development/development.component';

@NgModule({
  declarations: [
    AppComponent,
    EstebanPadillaComponent,
    AboutMeComponent,
    IosdeveloperComponent,
    WhatCanIDoComponent,
    RememberToClickComponent,
    HobbiesComponent,
    SkillsToolsDevelopmentComponent,
    LenguajesComponent,
    ExperienceEducationComponent,
    EpFooterComponent,
    DownloadComponent,
    BelieveComponent,
    ContactComponent,
    HighlightsComponent,
    DevelopmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [ SiteDataService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
