import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanDetailLayoutComponent } from './clan-detail-layout.component';

describe('ClanDetailLayoutComponent', () => {
  let component: ClanDetailLayoutComponent;
  let fixture: ComponentFixture<ClanDetailLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanDetailLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanDetailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
