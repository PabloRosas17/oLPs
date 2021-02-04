import { Component, Input } from '@angular/core';
import { ProjectsComponent } from '../../projects-component';

@Component({
  selector: 'app-swifttruck-broadcasting',
  templateUrl: './swifttruck-broadcasting.component.html',
  styleUrls: ['./swifttruck-broadcasting.component.css']
})
export class SwifttruckBroadcastingComponent implements ProjectsComponent {
  @Input() data: any;
}
