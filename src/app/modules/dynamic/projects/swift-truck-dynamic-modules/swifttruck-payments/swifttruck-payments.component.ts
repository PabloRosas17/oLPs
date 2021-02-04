import { Component, Input } from '@angular/core';
import { ProjectsComponent } from '../../projects-component';

@Component({
  selector: 'app-swifttruck-payments',
  templateUrl: './swifttruck-payments.component.html',
  styleUrls: ['./swifttruck-payments.component.css']
})
export class SwifttruckPaymentsComponent implements ProjectsComponent {
  @Input() data: any;
}
