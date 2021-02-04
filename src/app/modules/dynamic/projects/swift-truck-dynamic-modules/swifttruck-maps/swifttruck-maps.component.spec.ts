import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwifttruckMapsComponent } from './swifttruck-maps.component';

describe('SwifttruckMapsComponent', () => {
  let component: SwifttruckMapsComponent;
  let fixture: ComponentFixture<SwifttruckMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwifttruckMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwifttruckMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
