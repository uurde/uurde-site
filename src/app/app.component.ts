import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { ContactService } from './services/contact.service';
import { ProjectService } from './services/projects.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projects: any;
  projectTypes: any;
  resumes: any;
  skills: any;
  contact;
  project;
  resume;
  skill;
  user;

  siteLoading;

  today: number = Date.now();

  constructor(private _service: MainService, private _contactService: ContactService, private _projectService: ProjectService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.siteLoading = true;
    this.loadData();
  }

  loadData() {
    this._service.getAllData().subscribe(data => {
      this.user = data[0];
      this.projects = data[1];
      this.resumes = data[2];
      this.skills = data[3];
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.siteLoading = false;
    }, 5000);
    },
      null,
      () => {  });
  }

  save() {
    this.siteLoading = true;
    this._contactService.insertContact(this.contact);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.siteLoading = false;
  }, 5000);
  }

  selectProject(project) {
    this.project = project;
    this._projectService.getProject(project.projectId).subscribe(data => this.project = data, null);
  }
}