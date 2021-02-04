import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwifttruckPaymentsComponent } from './swifttruck-payments.component';

describe('SwifttruckPaymentsComponent', () => {
  let component: SwifttruckPaymentsComponent;
  let fixture: ComponentFixture<SwifttruckPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwifttruckPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwifttruckPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
