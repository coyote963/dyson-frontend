import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteweaponsComponent } from './favoriteweapons.component';

describe('FavoriteweaponsComponent', () => {
  let component: FavoriteweaponsComponent;
  let fixture: ComponentFixture<FavoriteweaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteweaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteweaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
