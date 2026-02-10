import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardC } from './item-card-c';

describe('ItemCardC', () => {
  let component: ItemCardC;
  let fixture: ComponentFixture<ItemCardC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCardC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
