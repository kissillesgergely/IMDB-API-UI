import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListYearComponent } from './result-list-year.component';

describe('ResultListYearComponent', () => {
  let component: ResultListYearComponent;
  let fixture: ComponentFixture<ResultListYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultListYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
