import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwifttruckRegistrationComponent } from './swifttruck-registration.component';

describe('SwifttruckRegistrationComponent', () => {
  let component: SwifttruckRegistrationComponent;
  let fixture: ComponentFixture<SwifttruckRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwifttruckRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwifttruckRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
