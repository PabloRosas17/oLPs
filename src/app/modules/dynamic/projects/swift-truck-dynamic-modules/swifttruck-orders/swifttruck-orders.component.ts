import { Component, Input } from '@angular/core';
import { ProjectsComponent } from '../../projects-component';

@Component({
  selector: 'app-swifttruck-orders',
  templateUrl: './swifttruck-orders.component.html',
  styleUrls: ['./swifttruck-orders.component.css']
})
export class SwifttruckOrdersComponent implements ProjectsComponent {
  @Input() data: any;
}
