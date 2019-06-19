import { TestBed } from '@angular/core/testing';

import { FetchProjectsService } from './fetch-projects.service';

describe('FetchProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchProjectsService = TestBed.get(FetchProjectsService);
    expect(service).toBeTruthy();
  });
});
