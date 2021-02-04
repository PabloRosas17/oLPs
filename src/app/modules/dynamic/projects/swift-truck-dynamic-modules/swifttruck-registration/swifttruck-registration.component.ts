import { Component, Input } from '@angular/core';
import { ProjectsComponent } from '../../projects-component';

@Component({
  selector: 'app-swifttruck-registration',
  templateUrl: './swifttruck-registration.component.html',
  styleUrls: ['./swifttruck-registration.component.css']
})
export class SwifttruckRegistrationComponent implements ProjectsComponent {
  @Input() data: any;
}
