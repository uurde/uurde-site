import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { ContactService } from './services/contact.service';
import { ProjectService } from './services/projects.service';

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

  constructor(private _service: MainService, private _contactService: ContactService, private _projectService: ProjectService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.siteLoading = true
    this._service.getAllData().subscribe(data => {
      this.user = data[0];
      this.projects = data[1];
      this.resumes = data[2];
      this.skills = data[3];
    },
      null,
      () => { this.siteLoading = false; });
  }

  onSubmit() {
    this._contactService.insertContact(this.contact);
  }

  selectProject(project) {
    this.project = project;
    this._projectService.getProject(project.projectId).subscribe(data => this.project = data, null);
  }
}