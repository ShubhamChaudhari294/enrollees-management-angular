import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleeDetailComponent } from './enrollee-detail.component';

describe('EnrolleeDetailComponent', () => {
  let component: EnrolleeDetailComponent;
  let fixture: ComponentFixture<EnrolleeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolleeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
