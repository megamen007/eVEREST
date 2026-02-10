import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardImageC } from './item-card-image-c';

describe('ItemCardImageC', () => {
  let component: ItemCardImageC;
  let fixture: ComponentFixture<ItemCardImageC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardImageC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardImageC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
