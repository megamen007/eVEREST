import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPanelC } from './forms-panel-c';

describe('FormsPanelC', () => {
  let component: FormsPanelC;
  let fixture: ComponentFixture<FormsPanelC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPanelC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsPanelC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
