import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteweaponComponent } from './favoriteweapon.component';

describe('FavoriteweaponComponent', () => {
  let component: FavoriteweaponComponent;
  let fixture: ComponentFixture<FavoriteweaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteweaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteweaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
