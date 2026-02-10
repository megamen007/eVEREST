import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemsC } from './add-items-c';

describe('AddItemsC', () => {
  let component: AddItemsC;
  let fixture: ComponentFixture<AddItemsC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemsC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemsC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
