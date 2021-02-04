import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ProjectsDirective } from '../projects.directive';
import { ProjectItem } from '../../../../core/entities/project-item';
import { ProjectsComponent } from '../projects-component';

@Component({
  selector: 'app-projects-banner',
  templateUrl: './projects-banner.component.html',
  styleUrls: ['./projects-banner.component.css']
})
export class ProjectsBannerComponent implements OnInit, OnDestroy {
  @Input() projects: ProjectItem[];
  @ViewChild(ProjectsDirective, {static: true}) projectsHost: ProjectsDirective;
  currentAdIndex = -1;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {  }

  ngOnInit() {
    if (this.projects == null){
        this.projects = ProjectItem[0];
    }
  }

  ngOnDestroy() {
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.projects.length;
    const item = this.projects[this.currentAdIndex];

    this.projectsHost.viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
    const componentRef = this.projectsHost.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as ProjectsComponent).data = item.data;
  }
}
