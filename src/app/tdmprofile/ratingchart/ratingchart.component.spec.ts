import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingchartComponent } from './ratingchart.component';

describe('RatingchartComponent', () => {
  let component: RatingchartComponent;
  let fixture: ComponentFixture<RatingchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
