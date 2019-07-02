import { TestBed } from '@angular/core/testing';

import { FetchBlogService } from './fetch-blog.service';

describe('FetchBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchBlogService = TestBed.get(FetchBlogService);
    expect(service).toBeTruthy();
  });
});
