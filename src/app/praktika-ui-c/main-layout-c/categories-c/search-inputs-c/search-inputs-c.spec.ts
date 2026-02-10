import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputsC } from './search-inputs-c';

describe('SearchInputsC', () => {
  let component: SearchInputsC;
  let fixture: ComponentFixture<SearchInputsC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInputsC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInputsC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
