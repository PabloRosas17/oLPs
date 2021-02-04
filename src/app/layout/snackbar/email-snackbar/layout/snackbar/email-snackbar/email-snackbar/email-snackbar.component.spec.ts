import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSnackbarComponent } from './email-snackbar.component';

describe('EmailSnackbarComponent', () => {
  let component: EmailSnackbarComponent;
  let fixture: ComponentFixture<EmailSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
