import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftTruckSnackbarComponent } from './swift-truck-snackbar.component';

describe('SwiftTruckSnackbarComponent', () => {
  let component: SwiftTruckSnackbarComponent;
  let fixture: ComponentFixture<SwiftTruckSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiftTruckSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftTruckSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
