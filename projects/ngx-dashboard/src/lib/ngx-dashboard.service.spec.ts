import { TestBed } from '@angular/core/testing';

import { NgxDashboardService } from './ngx-dashboard.service';

describe('NgxDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDashboardService = TestBed.get(NgxDashboardService);
    expect(service).toBeTruthy();
  });
});
