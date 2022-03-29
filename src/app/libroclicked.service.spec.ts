import { TestBed } from '@angular/core/testing';

import { LibroclickedService } from './libroclicked.service';

describe('LibroclickedService', () => {
  let service: LibroclickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroclickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
