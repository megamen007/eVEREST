import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalC } from './modal-c';

describe('ModalC', () => {
  let component: ModalC;
  let fixture: ComponentFixture<ModalC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
