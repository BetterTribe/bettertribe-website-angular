import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project/project.model';
import { FetchProjectsService } from '../services/fetch-projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor(private fetchProjectService: FetchProjectsService) { }

  ngOnInit() {
    this.fetchProjectService.getProjects().subscribe(projects => {
      this.projects = projects.map(project => {return {
        id: project.payload.doc.id,
        ...project.payload.doc.data()
      } as Project;
    })
    console.log(this.projects)
    });
  }

}
