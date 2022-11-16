import { TestBed } from '@angular/core/testing';

import { FoodDetailGuard } from './food-detail.guard';

describe('FoodDetailGuard', () => {
  let guard: FoodDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FoodDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
