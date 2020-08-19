import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankbadgeComponent } from './rankbadge.component';

describe('RankbadgeComponent', () => {
  let component: RankbadgeComponent;
  let fixture: ComponentFixture<RankbadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankbadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankbadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
