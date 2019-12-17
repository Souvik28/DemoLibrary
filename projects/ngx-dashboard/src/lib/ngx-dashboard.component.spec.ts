import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDashboardComponent } from './ngx-dashboard.component';

describe('NgxDashboardComponent', () => {
  let component: NgxDashboardComponent;
  let fixture: ComponentFixture<NgxDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
