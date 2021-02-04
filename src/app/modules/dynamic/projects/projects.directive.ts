import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[projects-host]'
})
export class ProjectsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
