import { Injectable } from '@angular/core';
import { SwifttruckRegistrationComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-registration/swifttruck-registration.component';
import { SwifttruckBroadcastingComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-broadcasting/swifttruck-broadcasting.component';
import { ProjectItem } from '../entities/project-item';
import { SwifttruckOrdersComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-orders/swifttruck-orders.component';
import { SwifttruckMapsComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-maps/swifttruck-maps.component';
import { SwifttruckPaymentsComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-payments/swifttruck-payments.component';
import { SwifttruckMediaComponent } from '../../modules/dynamic/projects/swift-truck-dynamic-modules/swifttruck-media/swifttruck-media.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  getDynamicItem(name: string) {
    switch (name) {
      case 'Registration':
          console.log('clicked Registration');
          return new ProjectItem(SwifttruckRegistrationComponent, {name: 'Registration'});
      case 'Broadcasting':
          console.log('clicked Broadcasting');
          return new ProjectItem(SwifttruckBroadcastingComponent, {name: 'Broadcasting'});
      case 'Maps':
          console.log('clicked Maps');
          return new ProjectItem(SwifttruckMapsComponent, {name: 'Maps'});
      case 'Orders':
          console.log('clicked Orders');
          return new ProjectItem(SwifttruckOrdersComponent, {name: 'Orders'});
      case 'Payments':
          console.log('clicked Payments');
          return new ProjectItem(SwifttruckPaymentsComponent, {name: 'Payments'});
      case 'Media':
          console.log('clicked Media');
          return new ProjectItem(SwifttruckMediaComponent, {name: 'Media'});
    }
  }

}
