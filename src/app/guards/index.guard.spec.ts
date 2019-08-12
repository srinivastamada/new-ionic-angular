import { TestBed, async, inject } from '@angular/core/testing';

import { IndexGuard } from './index.guard';

describe('IndexGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexGuard]
    });
  });

  it('should ...', inject([IndexGuard], (guard: IndexGuard) => {
    expect(guard).toBeTruthy();
  }));
});
