import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';

//Services
import { AboutService } from './services/about.service';
import { ContactService } from './services/contact.service';
import { ProjectService } from './services/projects.service';
import { ResumeService } from './services/resume.service';
import { SkillService } from './services/skill.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { MainService } from './services/main.service';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [
    AboutService,
    ContactService,
    ProjectService,
    ResumeService,
    SkillService,
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
