import { TestBed, inject } from '@angular/core/testing';

import { ListpropertyService } from './listproperty.service';

describe('ListpropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListpropertyService]
    });
  });

  it('should be created', inject([ListpropertyService], (service: ListpropertyService) => {
    expect(service).toBeTruthy();
  }));
});
