import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-swift-snackbar-demo',
  templateUrl: './swift-truck-snackbar.component.html',
  styleUrls: ['./swift-truck-snackbar.component.css']
})
export class SwiftTruckSnackbarComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
  ngOnInit() {
  }
}
