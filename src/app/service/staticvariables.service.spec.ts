import { TestBed, inject } from '@angular/core/testing';

import { StaticvariablesService } from './staticvariables.service';

describe('StaticvariablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticvariablesService]
    });
  });

  it('should be created', inject([StaticvariablesService], (service: StaticvariablesService) => {
    expect(service).toBeTruthy();
  }));
});
