import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoModalComponent } from './bingo-modal.component';

describe('ModalComponent', () => {
  let component: BingoModalComponent;
  let fixture: ComponentFixture<BingoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
