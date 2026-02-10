import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutC } from './main-layout-c';

describe('MainLayoutC', () => {
  let component: MainLayoutC;
  let fixture: ComponentFixture<MainLayoutC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
