import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesC } from './categories-c';

describe('CategoriesC', () => {
  let component: CategoriesC;
  let fixture: ComponentFixture<CategoriesC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
