import { TestBed } from '@angular/core/testing';

import { FetchBlogsService } from './fetch-blogs.service';

describe('FetchBlogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchBlogsService = TestBed.get(FetchBlogsService);
    expect(service).toBeTruthy();
  });
});
