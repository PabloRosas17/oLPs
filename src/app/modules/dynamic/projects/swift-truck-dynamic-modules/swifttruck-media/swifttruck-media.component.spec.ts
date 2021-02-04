import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwifttruckMediaComponent } from './swifttruck-media.component';

describe('SwifttruckMediaComponent', () => {
  let component: SwifttruckMediaComponent;
  let fixture: ComponentFixture<SwifttruckMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwifttruckMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwifttruckMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
