import { Component, Input } from '@angular/core';
import { ProjectsComponent } from '../../projects-component';

@Component({
  selector: 'app-swifttruck-maps',
  templateUrl: './swifttruck-maps.component.html',
  styleUrls: ['./swifttruck-maps.component.css']
})
export class SwifttruckMapsComponent implements ProjectsComponent {
  @Input() data: any;
}
