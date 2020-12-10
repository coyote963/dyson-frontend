import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanWallComponent } from './clan-wall.component';

describe('ClanWallComponent', () => {
  let component: ClanWallComponent;
  let fixture: ComponentFixture<ClanWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
