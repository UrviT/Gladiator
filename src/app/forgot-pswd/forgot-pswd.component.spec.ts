import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPSWDComponent } from './forgot-pswd.component';

describe('ForgotPSWDComponent', () => {
  let component: ForgotPSWDComponent;
  let fixture: ComponentFixture<ForgotPSWDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPSWDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPSWDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
