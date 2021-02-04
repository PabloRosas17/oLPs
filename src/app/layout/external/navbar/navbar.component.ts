import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

 /* TODO: automate token generation and synchronization with this project. */
  onPdfClick(): void {
    const pdflink = 'https://firebasestorage.googleapis.com/v0/b/' +
    'olps-firebase.appspot.com/o/olps-data%2F' +
    'pablorosas_bs_csc_rs_sw.pdf?alt=media&token=' +
    '32dcdb11-3639-4841-9689-12063447d784';
    window.open(pdflink, '_blank');
  }
}
