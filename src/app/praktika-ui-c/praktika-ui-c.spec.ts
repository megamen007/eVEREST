import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraktikaUiC } from './praktika-ui-c';

describe('PraktikaUiC', () => {
  let component: PraktikaUiC;
  let fixture: ComponentFixture<PraktikaUiC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraktikaUiC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraktikaUiC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
