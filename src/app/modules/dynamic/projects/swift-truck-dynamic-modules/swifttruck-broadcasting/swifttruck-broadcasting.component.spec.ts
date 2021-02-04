import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwifttruckBroadcastingComponent } from './swifttruck-broadcasting.component';

describe('SwifttruckBroadcastingComponent', () => {
  let component: SwifttruckBroadcastingComponent;
  let fixture: ComponentFixture<SwifttruckBroadcastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwifttruckBroadcastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwifttruckBroadcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
