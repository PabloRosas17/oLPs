import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FireAuthService } from 'src/app/core/fireauth/FireAuthService';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit, OnDestroy {

    constructor(public afs: FireAuthService) {}

    login(user: string, pass: string) {
        this.afs.login(user, pass);
    }

    @HostListener("window:scroll", ["$event"]) scroll() {
      let element = document.documentElement;
      let temp = document.getElementById('navable');
      if (element.scrollTop >= 50) {
        temp.classList.remove('navbar-opaque');
        temp.classList.add('navbar-default');
      }
      if (element.scrollTop < 50) {
        temp.classList.remove('navbar-default');
        temp.classList.add('navbar-opaque');
      }
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
