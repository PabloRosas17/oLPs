import { Component, Input } from '@angular/core';
import { ProjectsComponent } from '../../projects-component';

@Component({
  selector: 'app-swifttruck-media',
  templateUrl: './swifttruck-media.component.html',
  styleUrls: ['./swifttruck-media.component.css']
})
export class SwifttruckMediaComponent implements ProjectsComponent {
  @Input() data: any;
}
