import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackoutModalComponent } from './blackout-modal.component';

describe('BlackoutModalComponent', () => {
  let component: BlackoutModalComponent;
  let fixture: ComponentFixture<BlackoutModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackoutModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
