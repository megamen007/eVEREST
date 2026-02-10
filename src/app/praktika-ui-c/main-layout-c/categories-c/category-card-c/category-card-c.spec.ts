import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCardC } from './category-card-c';

describe('CategoryCardC', () => {
  let component: CategoryCardC;
  let fixture: ComponentFixture<CategoryCardC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCardC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCardC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
