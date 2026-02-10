import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsC } from './items-c';

describe('ItemsC', () => {
  let component: ItemsC;
  let fixture: ComponentFixture<ItemsC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
