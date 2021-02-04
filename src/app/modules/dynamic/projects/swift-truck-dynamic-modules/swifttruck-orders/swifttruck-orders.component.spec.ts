import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwifttruckOrdersComponent } from './swifttruck-orders.component';

describe('SwifttruckOrdersComponent', () => {
  let component: SwifttruckOrdersComponent;
  let fixture: ComponentFixture<SwifttruckOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwifttruckOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwifttruckOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
