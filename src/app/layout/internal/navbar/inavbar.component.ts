import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../../core/fireauth/FireAuthService';

@Component({
  selector: 'app-inavbar',
  templateUrl: './inavbar.component.html',
  styleUrls: ['./inavbar.component.css']
})
export class INavbarComponent implements OnInit {
  constructor(public afs: FireAuthService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.afs.logout();
  }
}
