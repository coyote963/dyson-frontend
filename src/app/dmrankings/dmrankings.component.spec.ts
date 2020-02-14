import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmrankingsComponent } from './dmrankings.component';

describe('DmrankingsComponent', () => {
  let component: DmrankingsComponent;
  let fixture: ComponentFixture<DmrankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmrankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmrankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
