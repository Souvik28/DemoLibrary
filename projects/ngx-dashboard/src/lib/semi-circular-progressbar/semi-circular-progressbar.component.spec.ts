import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiCircularProgressbarComponent } from './semi-circular-progressbar.component';

describe('SemiCircularProgressbarComponent', () => {
  let component: SemiCircularProgressbarComponent;
  let fixture: ComponentFixture<SemiCircularProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiCircularProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiCircularProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
