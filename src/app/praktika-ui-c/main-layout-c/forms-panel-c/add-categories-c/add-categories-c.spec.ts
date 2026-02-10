import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoriesC } from './add-categories-c';

describe('AddCategoriesC', () => {
  let component: AddCategoriesC;
  let fixture: ComponentFixture<AddCategoriesC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCategoriesC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoriesC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
